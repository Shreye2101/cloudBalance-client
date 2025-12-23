export const EC2_DATA = [
  { accountId: "27559555473", resourceId: "i-06e31a56c52865e2", name: "kbana-uat-auditor", region: "N. Virginia", status: "RUNNING", savings: "$0.00" },
  { accountId: "6855026932", resourceId: "i-0548e8306a432741a", name: "virtuoso", region: "N. Virginia", status: "RUNNING", savings: "$0.00" },
  { accountId: "27559555473", resourceId: "i-0cc464c878ec4e4cd", name: "signoz-apm-monitor", region: "Mumbai", status: "STOPPED", savings: "$67.39" }
];

export const RDS_DATA = [
  { resourceId: "arn:aws:rds:us-east-1:2755:db:ck-uat-ue1-kong", name: "ck-uat-ue1-kong-rds", engine: "postgres", region: "N. Virginia", status: "RUNNING" },
  { resourceId: "arn:aws:rds:us-east-1:2755:db:cloudonomic-dev", name: "cloudonomic-dev", engine: "mysql", region: "N. Virginia", status: "RUNNING" },
  { resourceId: "arn:aws:rds:us-east-1:2755:db:tuner-db-2", name: "tuner-database-2", engine: "aurora-postgresql", region: "N. Virginia", status: "STOPPED" }
];

export const ASG_DATA = [
  { resourceId: "arn:aws:autoscaling:us-east-1:2755:asg:ck-dev2", name: "ck-dev2-ue1-ecs-asg", region: "N. Virginia", desired: 4, min: 0, max: 5, status: "RUNNING" },
  { resourceId: "arn:aws:autoscaling:us-east-1:2755:asg:ck-qa1", name: "ck-qa1-ue1-ecs-asg", region: "N. Virginia", desired: 3, min: 2, max: 4, status: "RUNNING" },
  { resourceId: "arn:aws:autoscaling:us-east-1:2755:asg:cloudonomic", name: "cloudonomic-prod-asg", region: "N. Virginia", desired: 2, min: 2, max: 4, status: "STOPPED" }
];