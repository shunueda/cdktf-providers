// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/fast_consul_service_discovery
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBigipFastConsulServiceDiscoveryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies whether to look for public or private IP addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/fast_consul_service_discovery#address_realm DataBigipFastConsulServiceDiscovery#address_realm}
  */
  readonly addressRealm?: string;
  /**
  * Specifies whether you are updating your credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/fast_consul_service_discovery#credential_update DataBigipFastConsulServiceDiscovery#credential_update}
  */
  readonly credentialUpdate?: boolean | cdktf.IResolvable;
  /**
  * Base 64 encoded bearer token to make requests to the Consul API. Will be stored in the declaration in an encrypted format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/fast_consul_service_discovery#encoded_token DataBigipFastConsulServiceDiscovery#encoded_token}
  */
  readonly encodedToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/fast_consul_service_discovery#id DataBigipFastConsulServiceDiscovery#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Custom JMESPath Query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/fast_consul_service_discovery#jmes_path_query DataBigipFastConsulServiceDiscovery#jmes_path_query}
  */
  readonly jmesPathQuery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/fast_consul_service_discovery#minimum_monitors DataBigipFastConsulServiceDiscovery#minimum_monitors}
  */
  readonly minimumMonitors?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/fast_consul_service_discovery#port DataBigipFastConsulServiceDiscovery#port}
  */
  readonly port: number;
  /**
  * If true, the server certificate is verified against the list of supplied/default CAs when making requests to the Consul API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/fast_consul_service_discovery#reject_unauthorized DataBigipFastConsulServiceDiscovery#reject_unauthorized}
  */
  readonly rejectUnauthorized?: boolean | cdktf.IResolvable;
  /**
  * CA Bundle to validate server certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/fast_consul_service_discovery#trust_ca DataBigipFastConsulServiceDiscovery#trust_ca}
  */
  readonly trustCa?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/fast_consul_service_discovery#type DataBigipFastConsulServiceDiscovery#type}
  */
  readonly type?: string;
  /**
  * Action to take when node cannot be detected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/fast_consul_service_discovery#undetectable_action DataBigipFastConsulServiceDiscovery#undetectable_action}
  */
  readonly undetectableAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/fast_consul_service_discovery#update_interval DataBigipFastConsulServiceDiscovery#update_interval}
  */
  readonly updateInterval?: string;
  /**
  * The location of the node data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/fast_consul_service_discovery#uri DataBigipFastConsulServiceDiscovery#uri}
  */
  readonly uri: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/fast_consul_service_discovery bigip_fast_consul_service_discovery}
*/
export class DataBigipFastConsulServiceDiscovery extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip_fast_consul_service_discovery";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBigipFastConsulServiceDiscovery resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBigipFastConsulServiceDiscovery to import
  * @param importFromId The id of the existing DataBigipFastConsulServiceDiscovery that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/fast_consul_service_discovery#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBigipFastConsulServiceDiscovery to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip_fast_consul_service_discovery", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/fast_consul_service_discovery bigip_fast_consul_service_discovery} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBigipFastConsulServiceDiscoveryConfig
  */
  public constructor(scope: Construct, id: string, config: DataBigipFastConsulServiceDiscoveryConfig) {
    super(scope, id, {
      terraformResourceType: 'bigip_fast_consul_service_discovery',
      terraformGeneratorMetadata: {
        providerName: 'bigip',
        providerVersion: '1.24.1',
        providerVersionConstraint: '1.24.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addressRealm = config.addressRealm;
    this._credentialUpdate = config.credentialUpdate;
    this._encodedToken = config.encodedToken;
    this._id = config.id;
    this._jmesPathQuery = config.jmesPathQuery;
    this._minimumMonitors = config.minimumMonitors;
    this._port = config.port;
    this._rejectUnauthorized = config.rejectUnauthorized;
    this._trustCa = config.trustCa;
    this._type = config.type;
    this._undetectableAction = config.undetectableAction;
    this._updateInterval = config.updateInterval;
    this._uri = config.uri;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_realm - computed: false, optional: true, required: false
  private _addressRealm?: string; 
  public get addressRealm() {
    return this.getStringAttribute('address_realm');
  }
  public set addressRealm(value: string) {
    this._addressRealm = value;
  }
  public resetAddressRealm() {
    this._addressRealm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressRealmInput() {
    return this._addressRealm;
  }

  // consul_sd_json - computed: true, optional: false, required: false
  public get consulSdJson() {
    return this.getStringAttribute('consul_sd_json');
  }

  // credential_update - computed: false, optional: true, required: false
  private _credentialUpdate?: boolean | cdktf.IResolvable; 
  public get credentialUpdate() {
    return this.getBooleanAttribute('credential_update');
  }
  public set credentialUpdate(value: boolean | cdktf.IResolvable) {
    this._credentialUpdate = value;
  }
  public resetCredentialUpdate() {
    this._credentialUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialUpdateInput() {
    return this._credentialUpdate;
  }

  // encoded_token - computed: false, optional: true, required: false
  private _encodedToken?: string; 
  public get encodedToken() {
    return this.getStringAttribute('encoded_token');
  }
  public set encodedToken(value: string) {
    this._encodedToken = value;
  }
  public resetEncodedToken() {
    this._encodedToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodedTokenInput() {
    return this._encodedToken;
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

  // jmes_path_query - computed: false, optional: true, required: false
  private _jmesPathQuery?: string; 
  public get jmesPathQuery() {
    return this.getStringAttribute('jmes_path_query');
  }
  public set jmesPathQuery(value: string) {
    this._jmesPathQuery = value;
  }
  public resetJmesPathQuery() {
    this._jmesPathQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jmesPathQueryInput() {
    return this._jmesPathQuery;
  }

  // minimum_monitors - computed: false, optional: true, required: false
  private _minimumMonitors?: string; 
  public get minimumMonitors() {
    return this.getStringAttribute('minimum_monitors');
  }
  public set minimumMonitors(value: string) {
    this._minimumMonitors = value;
  }
  public resetMinimumMonitors() {
    this._minimumMonitors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumMonitorsInput() {
    return this._minimumMonitors;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // reject_unauthorized - computed: false, optional: true, required: false
  private _rejectUnauthorized?: boolean | cdktf.IResolvable; 
  public get rejectUnauthorized() {
    return this.getBooleanAttribute('reject_unauthorized');
  }
  public set rejectUnauthorized(value: boolean | cdktf.IResolvable) {
    this._rejectUnauthorized = value;
  }
  public resetRejectUnauthorized() {
    this._rejectUnauthorized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rejectUnauthorizedInput() {
    return this._rejectUnauthorized;
  }

  // trust_ca - computed: false, optional: true, required: false
  private _trustCa?: string; 
  public get trustCa() {
    return this.getStringAttribute('trust_ca');
  }
  public set trustCa(value: string) {
    this._trustCa = value;
  }
  public resetTrustCa() {
    this._trustCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustCaInput() {
    return this._trustCa;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // undetectable_action - computed: false, optional: true, required: false
  private _undetectableAction?: string; 
  public get undetectableAction() {
    return this.getStringAttribute('undetectable_action');
  }
  public set undetectableAction(value: string) {
    this._undetectableAction = value;
  }
  public resetUndetectableAction() {
    this._undetectableAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get undetectableActionInput() {
    return this._undetectableAction;
  }

  // update_interval - computed: false, optional: true, required: false
  private _updateInterval?: string; 
  public get updateInterval() {
    return this.getStringAttribute('update_interval');
  }
  public set updateInterval(value: string) {
    this._updateInterval = value;
  }
  public resetUpdateInterval() {
    this._updateInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateIntervalInput() {
    return this._updateInterval;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address_realm: cdktf.stringToTerraform(this._addressRealm),
      credential_update: cdktf.booleanToTerraform(this._credentialUpdate),
      encoded_token: cdktf.stringToTerraform(this._encodedToken),
      id: cdktf.stringToTerraform(this._id),
      jmes_path_query: cdktf.stringToTerraform(this._jmesPathQuery),
      minimum_monitors: cdktf.stringToTerraform(this._minimumMonitors),
      port: cdktf.numberToTerraform(this._port),
      reject_unauthorized: cdktf.booleanToTerraform(this._rejectUnauthorized),
      trust_ca: cdktf.stringToTerraform(this._trustCa),
      type: cdktf.stringToTerraform(this._type),
      undetectable_action: cdktf.stringToTerraform(this._undetectableAction),
      update_interval: cdktf.stringToTerraform(this._updateInterval),
      uri: cdktf.stringToTerraform(this._uri),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_realm: {
        value: cdktf.stringToHclTerraform(this._addressRealm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credential_update: {
        value: cdktf.booleanToHclTerraform(this._credentialUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encoded_token: {
        value: cdktf.stringToHclTerraform(this._encodedToken),
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
      jmes_path_query: {
        value: cdktf.stringToHclTerraform(this._jmesPathQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      minimum_monitors: {
        value: cdktf.stringToHclTerraform(this._minimumMonitors),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reject_unauthorized: {
        value: cdktf.booleanToHclTerraform(this._rejectUnauthorized),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      trust_ca: {
        value: cdktf.stringToHclTerraform(this._trustCa),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      undetectable_action: {
        value: cdktf.stringToHclTerraform(this._undetectableAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_interval: {
        value: cdktf.stringToHclTerraform(this._updateInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uri: {
        value: cdktf.stringToHclTerraform(this._uri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
