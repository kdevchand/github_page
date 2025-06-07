# GitHub Metrics Dashboard

<div class="grid" markdown>
:material-account-multiple: **Total Users**  
**3,300**  
[:octicons-arrow-right-24: View All](javascript:showUsers('total')){ .md-button }

:material-account-group: **Active/Inactive**  
**2,300** / **600**  
[:octicons-arrow-right-24: Details](javascript:showUsers('active')){ .md-button }

:material-source-repository: **Total Repos**  
**9,670**  
[:octicons-arrow-right-24: Breakdown](javascript:void(0)){ .md-button }

:material-timer: **Job Runtime**  
**3m 40s**  
[:octicons-info-24: Metrics](javascript:void(0)){ .md-button }
</div>

## Repository Growth
``` chart
type: bar
data: docs/data/github_jsons/repos_created_last_6_months.json
series: repositories_created
labels: month
```

## Activity Trends
```chart
type: line
data: docs/data/github_jsons/pull_requests_last_6_months.json
series: pull_requests
labels: month
title: Monthly PR Activity
```

```chart
type: line
data: docs/data/github_jsons/active_developers_last_6_months.json
series: active_developers
labels: month
title: Active Developers
```

## Organization Rankings
```csv-table
file: docs/data/github_jsons/top_organizations_by_repo_count.json
header: true
title: "Top Orgs by Repository Count"
```

```csv-table
file: docs/data/github_jsons/top_5_orgs_by_failure_rate.json
header: true
title: "Top Orgs by Failure Rate"
```

<div id="user-modal" class="modal" hidden>
### User Details
<div id="modal-content"></div>
<button onclick="document.getElementById('user-modal').hidden=true">Close</button>
</div>

<script src="../js/interactivity.js"></script>
