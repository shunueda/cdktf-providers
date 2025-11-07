// https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_agentless_scanning
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationAwsAgentlessScanningConfig extends cdktf.TerraformMetaArguments {
  /**
  * The aws account id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_agentless_scanning#account_id IntegrationAwsAgentlessScanning#account_id}
  */
  readonly accountId?: string;
  /**
  * The bucket arn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_agentless_scanning#bucket_arn IntegrationAwsAgentlessScanning#bucket_arn}
  */
  readonly bucketArn?: string;
  /**
  * The state of the external integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_agentless_scanning#enabled IntegrationAwsAgentlessScanning#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_agentless_scanning#id IntegrationAwsAgentlessScanning#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The integration name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_agentless_scanning#name IntegrationAwsAgentlessScanning#name}
  */
  readonly name: string;
  /**
  * The LQL query text
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_agentless_scanning#query_text IntegrationAwsAgentlessScanning#query_text}
  */
  readonly queryText?: string;
  /**
  * The number of attempts to create the external integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_agentless_scanning#retries IntegrationAwsAgentlessScanning#retries}
  */
  readonly retries?: number;
  /**
  * Whether to includes scanning for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_agentless_scanning#scan_containers IntegrationAwsAgentlessScanning#scan_containers}
  */
  readonly scanContainers?: boolean | cdktf.IResolvable;
  /**
  * How often in hours the scan will run in hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_agentless_scanning#scan_frequency IntegrationAwsAgentlessScanning#scan_frequency}
  */
  readonly scanFrequency: number;
  /**
  * Whether to includes scanning for host vulnerabilities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_agentless_scanning#scan_host_vulnerabilities IntegrationAwsAgentlessScanning#scan_host_vulnerabilities}
  */
  readonly scanHostVulnerabilities?: boolean | cdktf.IResolvable;
  /**
  * Whether to scan secondary volumes (true) or only root volumes (false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_agentless_scanning#scan_multi_volume IntegrationAwsAgentlessScanning#scan_multi_volume}
  */
  readonly scanMultiVolume?: boolean | cdktf.IResolvable;
  /**
  * Whether to scan stopped instances (true)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_agentless_scanning#scan_stopped_instances IntegrationAwsAgentlessScanning#scan_stopped_instances}
  */
  readonly scanStoppedInstances?: boolean | cdktf.IResolvable;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_agentless_scanning#credentials IntegrationAwsAgentlessScanning#credentials}
  */
  readonly credentials?: IntegrationAwsAgentlessScanningCredentials;
}
export interface IntegrationAwsAgentlessScanningCredentials {
  /**
  * The external id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_agentless_scanning#external_id IntegrationAwsAgentlessScanning#external_id}
  */
  readonly externalId: string;
  /**
  * The role arn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_agentless_scanning#role_arn IntegrationAwsAgentlessScanning#role_arn}
  */
  readonly roleArn: string;
}

export function integrationAwsAgentlessScanningCredentialsToTerraform(struct?: IntegrationAwsAgentlessScanningCredentialsOutputReference | IntegrationAwsAgentlessScanningCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_id: cdktf.stringToTerraform(struct!.externalId),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}


export function integrationAwsAgentlessScanningCredentialsToHclTerraform(struct?: IntegrationAwsAgentlessScanningCredentialsOutputReference | IntegrationAwsAgentlessScanningCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationAwsAgentlessScanningCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationAwsAgentlessScanningCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationAwsAgentlessScanningCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._externalId = undefined;
      this._roleArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._externalId = value.externalId;
      this._roleArn = value.roleArn;
    }
  }

  // external_id - computed: false, optional: false, required: true
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_agentless_scanning lacework_integration_aws_agentless_scanning}
*/
export class IntegrationAwsAgentlessScanning extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "lacework_integration_aws_agentless_scanning";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationAwsAgentlessScanning resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationAwsAgentlessScanning to import
  * @param importFromId The id of the existing IntegrationAwsAgentlessScanning that should be imported. Refer to the {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_agentless_scanning#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationAwsAgentlessScanning to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "lacework_integration_aws_agentless_scanning", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_aws_agentless_scanning lacework_integration_aws_agentless_scanning} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationAwsAgentlessScanningConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationAwsAgentlessScanningConfig) {
    super(scope, id, {
      terraformResourceType: 'lacework_integration_aws_agentless_scanning',
      terraformGeneratorMetadata: {
        providerName: 'lacework',
        providerVersion: '2.0.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._bucketArn = config.bucketArn;
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._queryText = config.queryText;
    this._retries = config.retries;
    this._scanContainers = config.scanContainers;
    this._scanFrequency = config.scanFrequency;
    this._scanHostVulnerabilities = config.scanHostVulnerabilities;
    this._scanMultiVolume = config.scanMultiVolume;
    this._scanStoppedInstances = config.scanStoppedInstances;
    this._credentials.internalValue = config.credentials;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // bucket_arn - computed: false, optional: true, required: false
  private _bucketArn?: string; 
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }
  public set bucketArn(value: string) {
    this._bucketArn = value;
  }
  public resetBucketArn() {
    this._bucketArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketArnInput() {
    return this._bucketArn;
  }

  // created_or_updated_by - computed: true, optional: false, required: false
  public get createdOrUpdatedBy() {
    return this.getStringAttribute('created_or_updated_by');
  }

  // created_or_updated_time - computed: true, optional: false, required: false
  public get createdOrUpdatedTime() {
    return this.getStringAttribute('created_or_updated_time');
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // intg_guid - computed: true, optional: false, required: false
  public get intgGuid() {
    return this.getStringAttribute('intg_guid');
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

  // org_level - computed: true, optional: false, required: false
  public get orgLevel() {
    return this.getBooleanAttribute('org_level');
  }

  // query_text - computed: false, optional: true, required: false
  private _queryText?: string; 
  public get queryText() {
    return this.getStringAttribute('query_text');
  }
  public set queryText(value: string) {
    this._queryText = value;
  }
  public resetQueryText() {
    this._queryText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTextInput() {
    return this._queryText;
  }

  // retries - computed: false, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // scan_containers - computed: false, optional: true, required: false
  private _scanContainers?: boolean | cdktf.IResolvable; 
  public get scanContainers() {
    return this.getBooleanAttribute('scan_containers');
  }
  public set scanContainers(value: boolean | cdktf.IResolvable) {
    this._scanContainers = value;
  }
  public resetScanContainers() {
    this._scanContainers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanContainersInput() {
    return this._scanContainers;
  }

  // scan_frequency - computed: false, optional: false, required: true
  private _scanFrequency?: number; 
  public get scanFrequency() {
    return this.getNumberAttribute('scan_frequency');
  }
  public set scanFrequency(value: number) {
    this._scanFrequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scanFrequencyInput() {
    return this._scanFrequency;
  }

  // scan_host_vulnerabilities - computed: false, optional: true, required: false
  private _scanHostVulnerabilities?: boolean | cdktf.IResolvable; 
  public get scanHostVulnerabilities() {
    return this.getBooleanAttribute('scan_host_vulnerabilities');
  }
  public set scanHostVulnerabilities(value: boolean | cdktf.IResolvable) {
    this._scanHostVulnerabilities = value;
  }
  public resetScanHostVulnerabilities() {
    this._scanHostVulnerabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanHostVulnerabilitiesInput() {
    return this._scanHostVulnerabilities;
  }

  // scan_multi_volume - computed: false, optional: true, required: false
  private _scanMultiVolume?: boolean | cdktf.IResolvable; 
  public get scanMultiVolume() {
    return this.getBooleanAttribute('scan_multi_volume');
  }
  public set scanMultiVolume(value: boolean | cdktf.IResolvable) {
    this._scanMultiVolume = value;
  }
  public resetScanMultiVolume() {
    this._scanMultiVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanMultiVolumeInput() {
    return this._scanMultiVolume;
  }

  // scan_stopped_instances - computed: false, optional: true, required: false
  private _scanStoppedInstances?: boolean | cdktf.IResolvable; 
  public get scanStoppedInstances() {
    return this.getBooleanAttribute('scan_stopped_instances');
  }
  public set scanStoppedInstances(value: boolean | cdktf.IResolvable) {
    this._scanStoppedInstances = value;
  }
  public resetScanStoppedInstances() {
    this._scanStoppedInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanStoppedInstancesInput() {
    return this._scanStoppedInstances;
  }

  // server_token - computed: true, optional: false, required: false
  public get serverToken() {
    return this.getStringAttribute('server_token');
  }

  // type_name - computed: true, optional: false, required: false
  public get typeName() {
    return this.getStringAttribute('type_name');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new IntegrationAwsAgentlessScanningCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: IntegrationAwsAgentlessScanningCredentials) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      bucket_arn: cdktf.stringToTerraform(this._bucketArn),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      query_text: cdktf.stringToTerraform(this._queryText),
      retries: cdktf.numberToTerraform(this._retries),
      scan_containers: cdktf.booleanToTerraform(this._scanContainers),
      scan_frequency: cdktf.numberToTerraform(this._scanFrequency),
      scan_host_vulnerabilities: cdktf.booleanToTerraform(this._scanHostVulnerabilities),
      scan_multi_volume: cdktf.booleanToTerraform(this._scanMultiVolume),
      scan_stopped_instances: cdktf.booleanToTerraform(this._scanStoppedInstances),
      credentials: integrationAwsAgentlessScanningCredentialsToTerraform(this._credentials.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bucket_arn: {
        value: cdktf.stringToHclTerraform(this._bucketArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      query_text: {
        value: cdktf.stringToHclTerraform(this._queryText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retries: {
        value: cdktf.numberToHclTerraform(this._retries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scan_containers: {
        value: cdktf.booleanToHclTerraform(this._scanContainers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      scan_frequency: {
        value: cdktf.numberToHclTerraform(this._scanFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scan_host_vulnerabilities: {
        value: cdktf.booleanToHclTerraform(this._scanHostVulnerabilities),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      scan_multi_volume: {
        value: cdktf.booleanToHclTerraform(this._scanMultiVolume),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      scan_stopped_instances: {
        value: cdktf.booleanToHclTerraform(this._scanStoppedInstances),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      credentials: {
        value: integrationAwsAgentlessScanningCredentialsToHclTerraform(this._credentials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IntegrationAwsAgentlessScanningCredentialsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
