# Dashboard Slideshow for Salesforce CRM Analytics

Auto-rotate multiple CRM Analytics dashboards in a single view with smooth transitions. Perfect for executive displays, team monitors, and operations centers.

![Salesforce](https://img.shields.io/badge/Salesforce-00A1E0?style=flat-square&logo=Salesforce&logoColor=white)
![Lightning Web Components](https://img.shields.io/badge/LWC-0070D2?style=flat-square)

---

## ✨ What It Does

Automatically cycles through multiple CRM Analytics dashboards with smooth fade transitions - turn one screen into a powerful data hub for your entire team.

---

## 🎯 Use Cases

### Executive TV Displays
Rotate through company KPIs, sales pipeline, customer satisfaction, and financial performance with automatic 30-second transitions.

### Call Center Monitors  
Display real-time call volume, agent performance, customer satisfaction, and SLA compliance for complete team visibility.

### Retail Store Back Offices
Show sales performance, inventory alerts, staff scheduling, and customer feedback in a continuous loop for store managers.

---

## ⚙️ How to Configure

### Step 1: Find Your Dashboard IDs

Open each dashboard in CRM Analytics and look at the URL:
```
https://your-org.lightning.force.com/analytics/dashboard/0FKNS000000ZGxx4AG/
```
The dashboard ID is: `0FKNS000000ZGxx4AG`

### Step 2: Add Component to Your Page

1. Navigate to an **App Page**, **Home Page**, or **Record Page**
2. Click **Edit Page**
3. Find **Dashboard Slideshow** in the component palette
4. Drag it onto your page

### Step 3: Configure Properties

| Property | Description | Example |
|----------|-------------|---------|
| **Dashboard IDs** | Comma-separated dashboard IDs | `0FKNS000000ZGxx4AG,0FKNS000000ZGxx5BH,0FKNS000000ZGxx6CI` |
| **Interval (seconds)** | Time between transitions | `30` (recommended: 10-60) |
| **Height (px)** | Display height | `1080` (standard: 800-1200) |
| **Show Title** | Display dashboard title | ✓ or ☐ |
| **Show Sharing** | Display sharing button | ☐ (usually disabled) |
| **Show Header** | Display dashboard header | ☐ (usually disabled) |

### Step 4: Save and Activate

Save your page and the slideshow will start automatically!

---

## 💡 Configuration Examples

### Executive Display (30-second rotation)
```
Dashboard IDs: 0FK5e000000001,0FK5e000000002,0FK5e000000003
Interval: 30
Height: 1080
Show Title: ✓
Show Sharing: ☐
Show Header: ☐
```

### Quick KPI Monitor (10-second rotation)
```
Dashboard IDs: 0FK5e000000004,0FK5e000000005
Interval: 10
Height: 800
Show Title: ☐
Show Sharing: ☐
Show Header: ☐
```

### Detailed Analysis (60-second rotation)
```
Dashboard IDs: 0FK5e000000006,0FK5e000000007,0FK5e000000008
Interval: 60
Height: 1200
Show Title: ✓
Show Sharing: ☐
Show Header: ✓
```


**⭐ Star this repo if you find it useful!**
