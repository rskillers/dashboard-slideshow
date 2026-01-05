import { LightningElement, api } from 'lwc';

export default class DashboardSlideshow extends LightningElement {
    @api dashboardIds = ''; 
    @api intervalSeconds = 10; 
    @api height = '800';
    @api showTitle = 'false';
    @api showSharing = 'false';
    @api showHeader = 'false';

    currentIndex = 0;
    dashboardArray = [];
    intervalId;

    connectedCallback() {
        this.parseDashboardIds();
        this.startSlideshow();
    }

    disconnectedCallback() {
        this.stopSlideshow();
    }

    parseDashboardIds() {
        if (this.dashboardIds) {
            this.dashboardArray = this.dashboardIds
                .split(',')
                .map(id => id.trim())
                .filter(id => id.length > 0);
        }
    }

    startSlideshow() {
        if (this.dashboardArray.length > 1) {
            this.intervalId = setInterval(() => {
                this.nextDashboard();
            }, this.intervalSeconds * 1000);
        }
    }

    stopSlideshow() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }

    nextDashboard() {
        this.currentIndex = (this.currentIndex + 1) % this.dashboardArray.length;
    }

    get dashboards() {
        return this.dashboardArray.map((id, index) => ({
            id: id,
            isActive: index === this.currentIndex,
            className: index === this.currentIndex ? 'slide-active' : 'slide-inactive',
            key: `dashboard-${index}`
        }));
    }
}