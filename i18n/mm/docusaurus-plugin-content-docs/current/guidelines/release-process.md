---
sidebar_position: 3
---

# ဆော့ဝဲဖြန့်ချိရေးလုပ်ငန်းစဉ်

## Monthly Release Process

1. First steps - Initial steps to setup the monthly release, including setting up the release schedule and the deployment cadence.
2. Release candidate - A test release candidate (RC) is created, along with a stable branch for the targeted semver version. The release candidate package is built, tested and deployed to the pre environment. A successful outcome indicates this package can be used as the final version. At this point release managers will announce the final commit to be included in the release.
3. Tag - Release managers tag the final version of the release based on the release candidate. The release is built and deployed to the Release environment.
4. Release - On the release day, the release packages are published.

### Will my PR be included in the next monthly release?

If you have a PR that you want to be included in the next release, please make sure that it is merged into the `main` branch before the release candidate is created. This is before release managers announce the release candidate. If you are unsure, please ask the release managers.

### Timelines

The only guaranteed date throughout the release cycle is the release date. On this date, the self-managed release will be published together with the release announcement.

All other dates are a guideline only and cannot be considered a deadline when it comes to what will be included into any type of release. This includes the development month and the dates defined there as well as any promises given to customers. This is strictly because there are a lot of moving parts to be considered when preparing a release which includes working on highest priority and severity issues as well as security related issues.


### Patch Release 

A patch release is an unscheduled release set out depending on requirements. It is usually released when there are enough bug fixes to warrant a release. The patch release is usually released to the Release environment first and then to the self-managed environment. 
