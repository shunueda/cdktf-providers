// https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_gcp_agentless_scanning
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationGcpAgentlessScanningConfig extends cdktf.TerraformMetaArguments {
  /**
  * Bucket containing analysis results shared with Lacework platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_gcp_agentless_scanning#bucket_name IntegrationGcpAgentlessScanning#bucket_name}
  */
  readonly bucketName: string;
  /**
  * The state of the external integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_gcp_agentless_scanning#enabled IntegrationGcpAgentlessScanning#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * List of Projects to specifically include/exclude.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_gcp_agentless_scanning#filter_list IntegrationGcpAgentlessScanning#filter_list}
  */
  readonly filterList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_gcp_agentless_scanning#id IntegrationGcpAgentlessScanning#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The integration name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_gcp_agentless_scanning#name IntegrationGcpAgentlessScanning#name}
  */
  readonly name: string;
  /**
  * The LQL query text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_gcp_agentless_scanning#query_text IntegrationGcpAgentlessScanning#query_text}
  */
  readonly queryText?: string;
  /**
  * Organization Id or Project Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_gcp_agentless_scanning#resource_id IntegrationGcpAgentlessScanning#resource_id}
  */
  readonly resourceId: string;
  /**
  * Integration level - ORGANIZATION / PROJECT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_gcp_agentless_scanning#resource_level IntegrationGcpAgentlessScanning#resource_level}
  */
  readonly resourceLevel?: string;
  /**
  * The number of attempts to create the external integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_gcp_agentless_scanning#retries IntegrationGcpAgentlessScanning#retries}
  */
  readonly retries?: number;
  /**
  * Whether to includes scanning for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_gcp_agentless_scanning#scan_containers IntegrationGcpAgentlessScanning#scan_containers}
  */
  readonly scanContainers?: boolean | cdktf.IResolvable;
  /**
  * How often in hours the scan will run in hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_gcp_agentless_scanning#scan_frequency IntegrationGcpAgentlessScanning#scan_frequency}
  */
  readonly scanFrequency?: number;
  /**
  * Whether to includes scanning for host vulnerabilities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_gcp_agentless_scanning#scan_host_vulnerabilities IntegrationGcpAgentlessScanning#scan_host_vulnerabilities}
  */
  readonly scanHostVulnerabilities?: boolean | cdktf.IResolvable;
  /**
  * Whether to scan secondary volumes (true) or only root volumes (false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_gcp_agentless_scanning#scan_multi_volume IntegrationGcpAgentlessScanning#scan_multi_volume}
  */
  readonly scanMultiVolume?: boolean | cdktf.IResolvable;
  /**
  * Whether to scan stopped instances (true)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_gcp_agentless_scanning#scan_stopped_instances IntegrationGcpAgentlessScanning#scan_stopped_instances}
  */
  readonly scanStoppedInstances?: boolean | cdktf.IResolvable;
  /**
  * Project ID where scanner is deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_gcp_agentless_scanning#scanning_project_id IntegrationGcpAgentlessScanning#scanning_project_id}
  */
  readonly scanningProjectId: string;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_gcp_agentless_scanning#credentials IntegrationGcpAgentlessScanning#credentials}
  */
  readonly credentials: IntegrationGcpAgentlessScanningCredentials;
}
export interface IntegrationGcpAgentlessScanningCredentials {
  /**
  * Client email from credentials file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_gcp_agentless_scanning#client_email IntegrationGcpAgentlessScanning#client_email}
  */
  readonly clientEmail: string;
  /**
  * Client Id from credentials file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_gcp_agentless_scanning#client_id IntegrationGcpAgentlessScanning#client_id}
  */
  readonly clientId: string;
  /**
  * Private Key from credentials file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_gcp_agentless_scanning#private_key IntegrationGcpAgentlessScanning#private_key}
  */
  readonly privateKey: string;
  /**
  * Private Key Id from credentials file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_gcp_agentless_scanning#private_key_id IntegrationGcpAgentlessScanning#private_key_id}
  */
  readonly privateKeyId: string;
  /**
  * Token URI from credentials file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_gcp_agentless_scanning#token_uri IntegrationGcpAgentlessScanning#token_uri}
  */
  readonly tokenUri?: string;
}

export function integrationGcpAgentlessScanningCredentialsToTerraform(struct?: IntegrationGcpAgentlessScanningCredentialsOutputReference | IntegrationGcpAgentlessScanningCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_email: cdktf.stringToTerraform(struct!.clientEmail),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    private_key_id: cdktf.stringToTerraform(struct!.privateKeyId),
    token_uri: cdktf.stringToTerraform(struct!.tokenUri),
  }
}


export function integrationGcpAgentlessScanningCredentialsToHclTerraform(struct?: IntegrationGcpAgentlessScanningCredentialsOutputReference | IntegrationGcpAgentlessScanningCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_email: {
      value: cdktf.stringToHclTerraform(struct!.clientEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key_id: {
      value: cdktf.stringToHclTerraform(struct!.privateKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_uri: {
      value: cdktf.stringToHclTerraform(struct!.tokenUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationGcpAgentlessScanningCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationGcpAgentlessScanningCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientEmail = this._clientEmail;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._privateKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyId = this._privateKeyId;
    }
    if (this._tokenUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenUri = this._tokenUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationGcpAgentlessScanningCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientEmail = undefined;
      this._clientId = undefined;
      this._privateKey = undefined;
      this._privateKeyId = undefined;
      this._tokenUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientEmail = value.clientEmail;
      this._clientId = value.clientId;
      this._privateKey = value.privateKey;
      this._privateKeyId = value.privateKeyId;
      this._tokenUri = value.tokenUri;
    }
  }

  // client_email - computed: false, optional: false, required: true
  private _clientEmail?: string; 
  public get clientEmail() {
    return this.getStringAttribute('client_email');
  }
  public set clientEmail(value: string) {
    this._clientEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientEmailInput() {
    return this._clientEmail;
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // private_key - computed: false, optional: false, required: true
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // private_key_id - computed: false, optional: false, required: true
  private _privateKeyId?: string; 
  public get privateKeyId() {
    return this.getStringAttribute('private_key_id');
  }
  public set privateKeyId(value: string) {
    this._privateKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyIdInput() {
    return this._privateKeyId;
  }

  // token_uri - computed: false, optional: true, required: false
  private _tokenUri?: string; 
  public get tokenUri() {
    return this.getStringAttribute('token_uri');
  }
  public set tokenUri(value: string) {
    this._tokenUri = value;
  }
  public resetTokenUri() {
    this._tokenUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenUriInput() {
    return this._tokenUri;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_gcp_agentless_scanning lacework_integration_gcp_agentless_scanning}
*/
export class IntegrationGcpAgentlessScanning extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "lacework_integration_gcp_agentless_scanning";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationGcpAgentlessScanning resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationGcpAgentlessScanning to import
  * @param importFromId The id of the existing IntegrationGcpAgentlessScanning that should be imported. Refer to the {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_gcp_agentless_scanning#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationGcpAgentlessScanning to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "lacework_integration_gcp_agentless_scanning", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/integration_gcp_agentless_scanning lacework_integration_gcp_agentless_scanning} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationGcpAgentlessScanningConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationGcpAgentlessScanningConfig) {
    super(scope, id, {
      terraformResourceType: 'lacework_integration_gcp_agentless_scanning',
      terraformGeneratorMetadata: {
        providerName: 'lacework',
        providerVersion: '2.0.10',
        providerVersionConstraint: '2.0.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bucketName = config.bucketName;
    this._enabled = config.enabled;
    this._filterList = config.filterList;
    this._id = config.id;
    this._name = config.name;
    this._queryText = config.queryText;
    this._resourceId = config.resourceId;
    this._resourceLevel = config.resourceLevel;
    this._retries = config.retries;
    this._scanContainers = config.scanContainers;
    this._scanFrequency = config.scanFrequency;
    this._scanHostVulnerabilities = config.scanHostVulnerabilities;
    this._scanMultiVolume = config.scanMultiVolume;
    this._scanStoppedInstances = config.scanStoppedInstances;
    this._scanningProjectId = config.scanningProjectId;
    this._credentials.internalValue = config.credentials;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
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

  // filter_list - computed: false, optional: true, required: false
  private _filterList?: string[]; 
  public get filterList() {
    return this.getListAttribute('filter_list');
  }
  public set filterList(value: string[]) {
    this._filterList = value;
  }
  public resetFilterList() {
    this._filterList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListInput() {
    return this._filterList;
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

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // resource_level - computed: false, optional: true, required: false
  private _resourceLevel?: string; 
  public get resourceLevel() {
    return this.getStringAttribute('resource_level');
  }
  public set resourceLevel(value: string) {
    this._resourceLevel = value;
  }
  public resetResourceLevel() {
    this._resourceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLevelInput() {
    return this._resourceLevel;
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

  // scan_frequency - computed: false, optional: true, required: false
  private _scanFrequency?: number; 
  public get scanFrequency() {
    return this.getNumberAttribute('scan_frequency');
  }
  public set scanFrequency(value: number) {
    this._scanFrequency = value;
  }
  public resetScanFrequency() {
    this._scanFrequency = undefined;
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

  // scanning_project_id - computed: false, optional: false, required: true
  private _scanningProjectId?: string; 
  public get scanningProjectId() {
    return this.getStringAttribute('scanning_project_id');
  }
  public set scanningProjectId(value: string) {
    this._scanningProjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scanningProjectIdInput() {
    return this._scanningProjectId;
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

  // credentials - computed: false, optional: false, required: true
  private _credentials = new IntegrationGcpAgentlessScanningCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: IntegrationGcpAgentlessScanningCredentials) {
    this._credentials.internalValue = value;
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
      bucket_name: cdktf.stringToTerraform(this._bucketName),
      enabled: cdktf.booleanToTerraform(this._enabled),
      filter_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._filterList),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      query_text: cdktf.stringToTerraform(this._queryText),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      resource_level: cdktf.stringToTerraform(this._resourceLevel),
      retries: cdktf.numberToTerraform(this._retries),
      scan_containers: cdktf.booleanToTerraform(this._scanContainers),
      scan_frequency: cdktf.numberToTerraform(this._scanFrequency),
      scan_host_vulnerabilities: cdktf.booleanToTerraform(this._scanHostVulnerabilities),
      scan_multi_volume: cdktf.booleanToTerraform(this._scanMultiVolume),
      scan_stopped_instances: cdktf.booleanToTerraform(this._scanStoppedInstances),
      scanning_project_id: cdktf.stringToTerraform(this._scanningProjectId),
      credentials: integrationGcpAgentlessScanningCredentialsToTerraform(this._credentials.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket_name: {
        value: cdktf.stringToHclTerraform(this._bucketName),
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
      filter_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._filterList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_level: {
        value: cdktf.stringToHclTerraform(this._resourceLevel),
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
      scanning_project_id: {
        value: cdktf.stringToHclTerraform(this._scanningProjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credentials: {
        value: integrationGcpAgentlessScanningCredentialsToHclTerraform(this._credentials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IntegrationGcpAgentlessScanningCredentialsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
