// https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/autostopping_aws_alb
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHarnessAutostoppingAwsAlbConfig extends cdktf.TerraformMetaArguments {
  /**
  * Arn of AWS ALB to be imported. Required only for importing existing ALB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/autostopping_aws_alb#alb_arn DataHarnessAutostoppingAwsAlb#alb_arn}
  */
  readonly albArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/autostopping_aws_alb#certificate_id DataHarnessAutostoppingAwsAlb#certificate_id}
  */
  readonly certificateId?: string;
  /**
  * Id of the cloud connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/autostopping_aws_alb#cloud_connector_id DataHarnessAutostoppingAwsAlb#cloud_connector_id}
  */
  readonly cloudConnectorId: string;
  /**
  * Governs how the loadabalancer entity will be deleted on Terraform destroy. When set to true, the associated ALB will be deleted permanently from AWS account. Be fully aware of the consequneces of settting this to true, as the action is irreversible. When set to false, solely the Harness LB representation will be deleted, leaving the cloud resources intact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/autostopping_aws_alb#delete_cloud_resources_on_destroy DataHarnessAutostoppingAwsAlb#delete_cloud_resources_on_destroy}
  */
  readonly deleteCloudResourcesOnDestroy: boolean | cdktf.IResolvable;
  /**
  * Hostname for the proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/autostopping_aws_alb#host_name DataHarnessAutostoppingAwsAlb#host_name}
  */
  readonly hostName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/autostopping_aws_alb#id DataHarnessAutostoppingAwsAlb#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/autostopping_aws_alb#name DataHarnessAutostoppingAwsAlb#name}
  */
  readonly name: string;
  /**
  * Region in which cloud resources are hosted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/autostopping_aws_alb#region DataHarnessAutostoppingAwsAlb#region}
  */
  readonly region: string;
  /**
  * Route 53 hosted zone id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/autostopping_aws_alb#route53_hosted_zone_id DataHarnessAutostoppingAwsAlb#route53_hosted_zone_id}
  */
  readonly route53HostedZoneId?: string;
  /**
  * Security Group to define the security rules that determine the inbound and outbound traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/autostopping_aws_alb#security_groups DataHarnessAutostoppingAwsAlb#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * VPC in which cloud resources are hosted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/autostopping_aws_alb#vpc DataHarnessAutostoppingAwsAlb#vpc}
  */
  readonly vpc: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/autostopping_aws_alb harness_autostopping_aws_alb}
*/
export class DataHarnessAutostoppingAwsAlb extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_autostopping_aws_alb";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHarnessAutostoppingAwsAlb resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHarnessAutostoppingAwsAlb to import
  * @param importFromId The id of the existing DataHarnessAutostoppingAwsAlb that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/autostopping_aws_alb#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHarnessAutostoppingAwsAlb to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_autostopping_aws_alb", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/autostopping_aws_alb harness_autostopping_aws_alb} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHarnessAutostoppingAwsAlbConfig
  */
  public constructor(scope: Construct, id: string, config: DataHarnessAutostoppingAwsAlbConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_autostopping_aws_alb',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.0',
        providerVersionConstraint: '0.39.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._albArn = config.albArn;
    this._certificateId = config.certificateId;
    this._cloudConnectorId = config.cloudConnectorId;
    this._deleteCloudResourcesOnDestroy = config.deleteCloudResourcesOnDestroy;
    this._hostName = config.hostName;
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._route53HostedZoneId = config.route53HostedZoneId;
    this._securityGroups = config.securityGroups;
    this._vpc = config.vpc;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alb_arn - computed: false, optional: true, required: false
  private _albArn?: string; 
  public get albArn() {
    return this.getStringAttribute('alb_arn');
  }
  public set albArn(value: string) {
    this._albArn = value;
  }
  public resetAlbArn() {
    this._albArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get albArnInput() {
    return this._albArn;
  }

  // certificate_id - computed: false, optional: true, required: false
  private _certificateId?: string; 
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
  public set certificateId(value: string) {
    this._certificateId = value;
  }
  public resetCertificateId() {
    this._certificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId;
  }

  // cloud_connector_id - computed: false, optional: false, required: true
  private _cloudConnectorId?: string; 
  public get cloudConnectorId() {
    return this.getStringAttribute('cloud_connector_id');
  }
  public set cloudConnectorId(value: string) {
    this._cloudConnectorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudConnectorIdInput() {
    return this._cloudConnectorId;
  }

  // delete_cloud_resources_on_destroy - computed: false, optional: false, required: true
  private _deleteCloudResourcesOnDestroy?: boolean | cdktf.IResolvable; 
  public get deleteCloudResourcesOnDestroy() {
    return this.getBooleanAttribute('delete_cloud_resources_on_destroy');
  }
  public set deleteCloudResourcesOnDestroy(value: boolean | cdktf.IResolvable) {
    this._deleteCloudResourcesOnDestroy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteCloudResourcesOnDestroyInput() {
    return this._deleteCloudResourcesOnDestroy;
  }

  // host_name - computed: false, optional: false, required: true
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // identifier - computed: true, optional: false, required: false
  public get identifier() {
    return this.getStringAttribute('identifier');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // route53_hosted_zone_id - computed: false, optional: true, required: false
  private _route53HostedZoneId?: string; 
  public get route53HostedZoneId() {
    return this.getStringAttribute('route53_hosted_zone_id');
  }
  public set route53HostedZoneId(value: string) {
    this._route53HostedZoneId = value;
  }
  public resetRoute53HostedZoneId() {
    this._route53HostedZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get route53HostedZoneIdInput() {
    return this._route53HostedZoneId;
  }

  // security_groups - computed: false, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // vpc - computed: false, optional: false, required: true
  private _vpc?: string; 
  public get vpc() {
    return this.getStringAttribute('vpc');
  }
  public set vpc(value: string) {
    this._vpc = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInput() {
    return this._vpc;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alb_arn: cdktf.stringToTerraform(this._albArn),
      certificate_id: cdktf.stringToTerraform(this._certificateId),
      cloud_connector_id: cdktf.stringToTerraform(this._cloudConnectorId),
      delete_cloud_resources_on_destroy: cdktf.booleanToTerraform(this._deleteCloudResourcesOnDestroy),
      host_name: cdktf.stringToTerraform(this._hostName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      route53_hosted_zone_id: cdktf.stringToTerraform(this._route53HostedZoneId),
      security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroups),
      vpc: cdktf.stringToTerraform(this._vpc),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alb_arn: {
        value: cdktf.stringToHclTerraform(this._albArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_id: {
        value: cdktf.stringToHclTerraform(this._certificateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_connector_id: {
        value: cdktf.stringToHclTerraform(this._cloudConnectorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_cloud_resources_on_destroy: {
        value: cdktf.booleanToHclTerraform(this._deleteCloudResourcesOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host_name: {
        value: cdktf.stringToHclTerraform(this._hostName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route53_hosted_zone_id: {
        value: cdktf.stringToHclTerraform(this._route53HostedZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      vpc: {
        value: cdktf.stringToHclTerraform(this._vpc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
