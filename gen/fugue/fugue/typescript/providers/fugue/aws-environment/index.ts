// https://registry.terraform.io/providers/fugue/fugue/0.0.11/docs/resources/aws_environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsEnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The set of compliance families to enable in this environment, e.g. ["CIS", "SOC2", "FBP", "NIST", "HIPAA"].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fugue/fugue/0.0.11/docs/resources/aws_environment#compliance_families AwsEnvironment#compliance_families}
  */
  readonly complianceFamilies?: string[];
  /**
  * Indicates whether this is an AWS GovCloud account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fugue/fugue/0.0.11/docs/resources/aws_environment#govcloud AwsEnvironment#govcloud}
  */
  readonly govcloud?: boolean | cdktf.IResolvable;
  /**
  * The name for the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fugue/fugue/0.0.11/docs/resources/aws_environment#name AwsEnvironment#name}
  */
  readonly name: string;
  /**
  * The AWS region names to include in this environment. Use `*` to capture all supported regions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fugue/fugue/0.0.11/docs/resources/aws_environment#regions AwsEnvironment#regions}
  */
  readonly regions: string[];
  /**
  * The set of resource types to scan in this environment. You can use the `fugue_aws_types` data source to access the full list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fugue/fugue/0.0.11/docs/resources/aws_environment#resource_types AwsEnvironment#resource_types}
  */
  readonly resourceTypes: string[];
  /**
  * The AWS IAM role ARN used to provide Fugue secure access to the AWS account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fugue/fugue/0.0.11/docs/resources/aws_environment#role_arn AwsEnvironment#role_arn}
  */
  readonly roleArn: string;
  /**
  * Controls the time in seconds between scheduled scans of this environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fugue/fugue/0.0.11/docs/resources/aws_environment#scan_interval AwsEnvironment#scan_interval}
  */
  readonly scanInterval?: number;
  /**
  * Controls whether this environment is scanned on a schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fugue/fugue/0.0.11/docs/resources/aws_environment#scan_schedule_enabled AwsEnvironment#scan_schedule_enabled}
  */
  readonly scanScheduleEnabled?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fugue/fugue/0.0.11/docs/resources/aws_environment fugue_aws_environment}
*/
export class AwsEnvironment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fugue_aws_environment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsEnvironment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsEnvironment to import
  * @param importFromId The id of the existing AwsEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/fugue/fugue/0.0.11/docs/resources/aws_environment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsEnvironment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fugue_aws_environment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fugue/fugue/0.0.11/docs/resources/aws_environment fugue_aws_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: AwsEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'fugue_aws_environment',
      terraformGeneratorMetadata: {
        providerName: 'fugue',
        providerVersion: '0.0.11'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._complianceFamilies = config.complianceFamilies;
    this._govcloud = config.govcloud;
    this._name = config.name;
    this._regions = config.regions;
    this._resourceTypes = config.resourceTypes;
    this._roleArn = config.roleArn;
    this._scanInterval = config.scanInterval;
    this._scanScheduleEnabled = config.scanScheduleEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compliance_families - computed: false, optional: true, required: false
  private _complianceFamilies?: string[]; 
  public get complianceFamilies() {
    return cdktf.Fn.tolist(this.getListAttribute('compliance_families'));
  }
  public set complianceFamilies(value: string[]) {
    this._complianceFamilies = value;
  }
  public resetComplianceFamilies() {
    this._complianceFamilies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceFamiliesInput() {
    return this._complianceFamilies;
  }

  // govcloud - computed: false, optional: true, required: false
  private _govcloud?: boolean | cdktf.IResolvable; 
  public get govcloud() {
    return this.getBooleanAttribute('govcloud');
  }
  public set govcloud(value: boolean | cdktf.IResolvable) {
    this._govcloud = value;
  }
  public resetGovcloud() {
    this._govcloud = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get govcloudInput() {
    return this._govcloud;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // regions - computed: false, optional: false, required: true
  private _regions?: string[]; 
  public get regions() {
    return cdktf.Fn.tolist(this.getListAttribute('regions'));
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // resource_types - computed: false, optional: false, required: true
  private _resourceTypes?: string[]; 
  public get resourceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('resource_types'));
  }
  public set resourceTypes(value: string[]) {
    this._resourceTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypesInput() {
    return this._resourceTypes;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // scan_interval - computed: false, optional: true, required: false
  private _scanInterval?: number; 
  public get scanInterval() {
    return this.getNumberAttribute('scan_interval');
  }
  public set scanInterval(value: number) {
    this._scanInterval = value;
  }
  public resetScanInterval() {
    this._scanInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanIntervalInput() {
    return this._scanInterval;
  }

  // scan_schedule_enabled - computed: false, optional: true, required: false
  private _scanScheduleEnabled?: boolean | cdktf.IResolvable; 
  public get scanScheduleEnabled() {
    return this.getBooleanAttribute('scan_schedule_enabled');
  }
  public set scanScheduleEnabled(value: boolean | cdktf.IResolvable) {
    this._scanScheduleEnabled = value;
  }
  public resetScanScheduleEnabled() {
    this._scanScheduleEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanScheduleEnabledInput() {
    return this._scanScheduleEnabled;
  }

  // scan_status - computed: true, optional: false, required: false
  public get scanStatus() {
    return this.getStringAttribute('scan_status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compliance_families: cdktf.listMapper(cdktf.stringToTerraform, false)(this._complianceFamilies),
      govcloud: cdktf.booleanToTerraform(this._govcloud),
      name: cdktf.stringToTerraform(this._name),
      regions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._regions),
      resource_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._resourceTypes),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      scan_interval: cdktf.numberToTerraform(this._scanInterval),
      scan_schedule_enabled: cdktf.booleanToTerraform(this._scanScheduleEnabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compliance_families: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._complianceFamilies),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      govcloud: {
        value: cdktf.booleanToHclTerraform(this._govcloud),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      regions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._regions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      resource_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._resourceTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      role_arn: {
        value: cdktf.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scan_interval: {
        value: cdktf.numberToHclTerraform(this._scanInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scan_schedule_enabled: {
        value: cdktf.booleanToHclTerraform(this._scanScheduleEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
