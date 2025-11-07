// https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/source_vmware
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SourceVmwareConfig extends cdktf.TerraformMetaArguments {
  /**
  * If the latency of a datastore is above this value,
  * 				existing backup tasks using the datastore are throttled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/source_vmware#active_task_latency SourceVmware#active_task_latency}
  */
  readonly activeTaskLatency?: number;
  /**
  * The contents of CA certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/source_vmware#ca_certificate SourceVmware#ca_certificate}
  */
  readonly caCertificate?: string;
  /**
  * Specifies whether datastore streams are configured
  * 				for all datastores that are part of the registered entity. If set
  * 				to true, number of streams from Cohesity cluster to the registered
  * 				entity will be limited to the value set for number_of_streams. If
  * 				not set or set to false, there is no max limit for the number of 
  * 				concurrent streams.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/source_vmware#cap_streams_per_datastore SourceVmware#cap_streams_per_datastore}
  */
  readonly capStreamsPerDatastore?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether read operations to the datastores,
  * 				which are part of the registered Protection Source, are throttled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/source_vmware#enable_latency_throttling SourceVmware#enable_latency_throttling}
  */
  readonly enableLatencyThrottling?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether SSL verification should be performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/source_vmware#enable_ssl_verification SourceVmware#enable_ssl_verification}
  */
  readonly enableSslVerification?: boolean | cdktf.IResolvable;
  /**
  * Specifies the network endpoint of the Protection
  * 				Source where it is reachable. It could be an URL or hostname or
  * 				an IP address of the Protection Source
  * 							  
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/source_vmware#endpoint SourceVmware#endpoint}
  */
  readonly endpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/source_vmware#id SourceVmware#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If the latency of a datastore is above this value,
  * 				then new backup tasks using the datastore will not be started.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/source_vmware#new_task_latency SourceVmware#new_task_latency}
  */
  readonly newTaskLatency?: number;
  /**
  * Specifies the limit on the number of streams
  * 				Cohesity cluster will make concurrently to the datastores
  * 				of the registered entity. This limit is enforced only when the
  * 				cap_streams_per_datastore is set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/source_vmware#number_of_streams SourceVmware#number_of_streams}
  */
  readonly numberOfStreams?: number;
  /**
  * Specifies password of the username to access the target source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/source_vmware#password SourceVmware#password}
  */
  readonly password?: string;
  /**
  * Specifies username to access the target source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/source_vmware#username SourceVmware#username}
  */
  readonly username: string;
  /**
  * Specifies the VMware entity type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/source_vmware#vmware_type SourceVmware#vmware_type}
  */
  readonly vmwareType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/source_vmware cohesity_source_vmware}
*/
export class SourceVmware extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cohesity_source_vmware";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SourceVmware resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SourceVmware to import
  * @param importFromId The id of the existing SourceVmware that should be imported. Refer to the {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/source_vmware#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SourceVmware to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cohesity_source_vmware", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/source_vmware cohesity_source_vmware} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SourceVmwareConfig
  */
  public constructor(scope: Construct, id: string, config: SourceVmwareConfig) {
    super(scope, id, {
      terraformResourceType: 'cohesity_source_vmware',
      terraformGeneratorMetadata: {
        providerName: 'cohesity',
        providerVersion: '2.1.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activeTaskLatency = config.activeTaskLatency;
    this._caCertificate = config.caCertificate;
    this._capStreamsPerDatastore = config.capStreamsPerDatastore;
    this._enableLatencyThrottling = config.enableLatencyThrottling;
    this._enableSslVerification = config.enableSslVerification;
    this._endpoint = config.endpoint;
    this._id = config.id;
    this._newTaskLatency = config.newTaskLatency;
    this._numberOfStreams = config.numberOfStreams;
    this._password = config.password;
    this._username = config.username;
    this._vmwareType = config.vmwareType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_task_latency - computed: false, optional: true, required: false
  private _activeTaskLatency?: number; 
  public get activeTaskLatency() {
    return this.getNumberAttribute('active_task_latency');
  }
  public set activeTaskLatency(value: number) {
    this._activeTaskLatency = value;
  }
  public resetActiveTaskLatency() {
    this._activeTaskLatency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeTaskLatencyInput() {
    return this._activeTaskLatency;
  }

  // ca_certificate - computed: false, optional: true, required: false
  private _caCertificate?: string; 
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
  public set caCertificate(value: string) {
    this._caCertificate = value;
  }
  public resetCaCertificate() {
    this._caCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }

  // cap_streams_per_datastore - computed: false, optional: true, required: false
  private _capStreamsPerDatastore?: boolean | cdktf.IResolvable; 
  public get capStreamsPerDatastore() {
    return this.getBooleanAttribute('cap_streams_per_datastore');
  }
  public set capStreamsPerDatastore(value: boolean | cdktf.IResolvable) {
    this._capStreamsPerDatastore = value;
  }
  public resetCapStreamsPerDatastore() {
    this._capStreamsPerDatastore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capStreamsPerDatastoreInput() {
    return this._capStreamsPerDatastore;
  }

  // enable_latency_throttling - computed: false, optional: true, required: false
  private _enableLatencyThrottling?: boolean | cdktf.IResolvable; 
  public get enableLatencyThrottling() {
    return this.getBooleanAttribute('enable_latency_throttling');
  }
  public set enableLatencyThrottling(value: boolean | cdktf.IResolvable) {
    this._enableLatencyThrottling = value;
  }
  public resetEnableLatencyThrottling() {
    this._enableLatencyThrottling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLatencyThrottlingInput() {
    return this._enableLatencyThrottling;
  }

  // enable_ssl_verification - computed: false, optional: true, required: false
  private _enableSslVerification?: boolean | cdktf.IResolvable; 
  public get enableSslVerification() {
    return this.getBooleanAttribute('enable_ssl_verification');
  }
  public set enableSslVerification(value: boolean | cdktf.IResolvable) {
    this._enableSslVerification = value;
  }
  public resetEnableSslVerification() {
    this._enableSslVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSslVerificationInput() {
    return this._enableSslVerification;
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
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

  // new_task_latency - computed: false, optional: true, required: false
  private _newTaskLatency?: number; 
  public get newTaskLatency() {
    return this.getNumberAttribute('new_task_latency');
  }
  public set newTaskLatency(value: number) {
    this._newTaskLatency = value;
  }
  public resetNewTaskLatency() {
    this._newTaskLatency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newTaskLatencyInput() {
    return this._newTaskLatency;
  }

  // number_of_streams - computed: false, optional: true, required: false
  private _numberOfStreams?: number; 
  public get numberOfStreams() {
    return this.getNumberAttribute('number_of_streams');
  }
  public set numberOfStreams(value: number) {
    this._numberOfStreams = value;
  }
  public resetNumberOfStreams() {
    this._numberOfStreams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfStreamsInput() {
    return this._numberOfStreams;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // vmware_type - computed: false, optional: true, required: false
  private _vmwareType?: string; 
  public get vmwareType() {
    return this.getStringAttribute('vmware_type');
  }
  public set vmwareType(value: string) {
    this._vmwareType = value;
  }
  public resetVmwareType() {
    this._vmwareType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmwareTypeInput() {
    return this._vmwareType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active_task_latency: cdktf.numberToTerraform(this._activeTaskLatency),
      ca_certificate: cdktf.stringToTerraform(this._caCertificate),
      cap_streams_per_datastore: cdktf.booleanToTerraform(this._capStreamsPerDatastore),
      enable_latency_throttling: cdktf.booleanToTerraform(this._enableLatencyThrottling),
      enable_ssl_verification: cdktf.booleanToTerraform(this._enableSslVerification),
      endpoint: cdktf.stringToTerraform(this._endpoint),
      id: cdktf.stringToTerraform(this._id),
      new_task_latency: cdktf.numberToTerraform(this._newTaskLatency),
      number_of_streams: cdktf.numberToTerraform(this._numberOfStreams),
      password: cdktf.stringToTerraform(this._password),
      username: cdktf.stringToTerraform(this._username),
      vmware_type: cdktf.stringToTerraform(this._vmwareType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active_task_latency: {
        value: cdktf.numberToHclTerraform(this._activeTaskLatency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ca_certificate: {
        value: cdktf.stringToHclTerraform(this._caCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cap_streams_per_datastore: {
        value: cdktf.booleanToHclTerraform(this._capStreamsPerDatastore),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_latency_throttling: {
        value: cdktf.booleanToHclTerraform(this._enableLatencyThrottling),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_ssl_verification: {
        value: cdktf.booleanToHclTerraform(this._enableSslVerification),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
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
      new_task_latency: {
        value: cdktf.numberToHclTerraform(this._newTaskLatency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      number_of_streams: {
        value: cdktf.numberToHclTerraform(this._numberOfStreams),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vmware_type: {
        value: cdktf.stringToHclTerraform(this._vmwareType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
