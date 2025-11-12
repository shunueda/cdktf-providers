// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/data-sources/firenet_vendor_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAviatrixFirenetVendorIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * API token for Fortinet FortiGate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/data-sources/firenet_vendor_integration#api_token DataAviatrixFirenetVendorIntegration#api_token}
  */
  readonly apiToken?: string;
  /**
  * Name of firewall instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/data-sources/firenet_vendor_integration#firewall_name DataAviatrixFirenetVendorIntegration#firewall_name}
  */
  readonly firewallName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/data-sources/firenet_vendor_integration#id DataAviatrixFirenetVendorIntegration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of Firewall instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/data-sources/firenet_vendor_integration#instance_id DataAviatrixFirenetVendorIntegration#instance_id}
  */
  readonly instanceId: string;
  /**
  * Number of retries for 'save' or 'synchronize'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/data-sources/firenet_vendor_integration#number_of_retries DataAviatrixFirenetVendorIntegration#number_of_retries}
  */
  readonly numberOfRetries?: number;
  /**
  * Firewall login password for API calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/data-sources/firenet_vendor_integration#password DataAviatrixFirenetVendorIntegration#password}
  */
  readonly password?: string;
  /**
  * Private key file for Check Point Cloud Guard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/data-sources/firenet_vendor_integration#private_key_file DataAviatrixFirenetVendorIntegration#private_key_file}
  */
  readonly privateKeyFile?: string;
  /**
  * The IP address of the firewall management interface for API calls from the Aviatrix Controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/data-sources/firenet_vendor_integration#public_ip DataAviatrixFirenetVendorIntegration#public_ip}
  */
  readonly publicIp?: string;
  /**
  * Retry interval in seconds for `save` or `synchronize`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/data-sources/firenet_vendor_integration#retry_interval DataAviatrixFirenetVendorIntegration#retry_interval}
  */
  readonly retryInterval?: number;
  /**
  * Specify the firewall virtual Router name you wish the Controller to program. If left unspecified, the Controller programs the firewall’s default router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/data-sources/firenet_vendor_integration#route_table DataAviatrixFirenetVendorIntegration#route_table}
  */
  readonly routeTable?: string;
  /**
  * Switch to save or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/data-sources/firenet_vendor_integration#save DataAviatrixFirenetVendorIntegration#save}
  */
  readonly save?: boolean | cdktf.IResolvable;
  /**
  * Switch to sync or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/data-sources/firenet_vendor_integration#synchronize DataAviatrixFirenetVendorIntegration#synchronize}
  */
  readonly synchronize?: boolean | cdktf.IResolvable;
  /**
  * Firewall login name for API calls from the Controller. For example, admin-api, as shown in the screen shot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/data-sources/firenet_vendor_integration#username DataAviatrixFirenetVendorIntegration#username}
  */
  readonly username?: string;
  /**
  * Select PAN. Valid values: 'Generic', 'Palo Alto Networks VM-Series', 'Aviatrix FQDN Gateway', and 'Fortinet FortiGate'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/data-sources/firenet_vendor_integration#vendor_type DataAviatrixFirenetVendorIntegration#vendor_type}
  */
  readonly vendorType: string;
  /**
  * VPC ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/data-sources/firenet_vendor_integration#vpc_id DataAviatrixFirenetVendorIntegration#vpc_id}
  */
  readonly vpcId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/data-sources/firenet_vendor_integration aviatrix_firenet_vendor_integration}
*/
export class DataAviatrixFirenetVendorIntegration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_firenet_vendor_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAviatrixFirenetVendorIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAviatrixFirenetVendorIntegration to import
  * @param importFromId The id of the existing DataAviatrixFirenetVendorIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/data-sources/firenet_vendor_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAviatrixFirenetVendorIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_firenet_vendor_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/data-sources/firenet_vendor_integration aviatrix_firenet_vendor_integration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAviatrixFirenetVendorIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAviatrixFirenetVendorIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_firenet_vendor_integration',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.1.10',
        providerVersionConstraint: '8.1.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiToken = config.apiToken;
    this._firewallName = config.firewallName;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._numberOfRetries = config.numberOfRetries;
    this._password = config.password;
    this._privateKeyFile = config.privateKeyFile;
    this._publicIp = config.publicIp;
    this._retryInterval = config.retryInterval;
    this._routeTable = config.routeTable;
    this._save = config.save;
    this._synchronize = config.synchronize;
    this._username = config.username;
    this._vendorType = config.vendorType;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_token - computed: false, optional: true, required: false
  private _apiToken?: string; 
  public get apiToken() {
    return this.getStringAttribute('api_token');
  }
  public set apiToken(value: string) {
    this._apiToken = value;
  }
  public resetApiToken() {
    this._apiToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }

  // firewall_name - computed: false, optional: true, required: false
  private _firewallName?: string; 
  public get firewallName() {
    return this.getStringAttribute('firewall_name');
  }
  public set firewallName(value: string) {
    this._firewallName = value;
  }
  public resetFirewallName() {
    this._firewallName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallNameInput() {
    return this._firewallName;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // number_of_retries - computed: false, optional: true, required: false
  private _numberOfRetries?: number; 
  public get numberOfRetries() {
    return this.getNumberAttribute('number_of_retries');
  }
  public set numberOfRetries(value: number) {
    this._numberOfRetries = value;
  }
  public resetNumberOfRetries() {
    this._numberOfRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfRetriesInput() {
    return this._numberOfRetries;
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

  // private_key_file - computed: false, optional: true, required: false
  private _privateKeyFile?: string; 
  public get privateKeyFile() {
    return this.getStringAttribute('private_key_file');
  }
  public set privateKeyFile(value: string) {
    this._privateKeyFile = value;
  }
  public resetPrivateKeyFile() {
    this._privateKeyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyFileInput() {
    return this._privateKeyFile;
  }

  // public_ip - computed: false, optional: true, required: false
  private _publicIp?: string; 
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }
  public set publicIp(value: string) {
    this._publicIp = value;
  }
  public resetPublicIp() {
    this._publicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpInput() {
    return this._publicIp;
  }

  // retry_interval - computed: false, optional: true, required: false
  private _retryInterval?: number; 
  public get retryInterval() {
    return this.getNumberAttribute('retry_interval');
  }
  public set retryInterval(value: number) {
    this._retryInterval = value;
  }
  public resetRetryInterval() {
    this._retryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryIntervalInput() {
    return this._retryInterval;
  }

  // route_table - computed: false, optional: true, required: false
  private _routeTable?: string; 
  public get routeTable() {
    return this.getStringAttribute('route_table');
  }
  public set routeTable(value: string) {
    this._routeTable = value;
  }
  public resetRouteTable() {
    this._routeTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableInput() {
    return this._routeTable;
  }

  // save - computed: false, optional: true, required: false
  private _save?: boolean | cdktf.IResolvable; 
  public get save() {
    return this.getBooleanAttribute('save');
  }
  public set save(value: boolean | cdktf.IResolvable) {
    this._save = value;
  }
  public resetSave() {
    this._save = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saveInput() {
    return this._save;
  }

  // synchronize - computed: false, optional: true, required: false
  private _synchronize?: boolean | cdktf.IResolvable; 
  public get synchronize() {
    return this.getBooleanAttribute('synchronize');
  }
  public set synchronize(value: boolean | cdktf.IResolvable) {
    this._synchronize = value;
  }
  public resetSynchronize() {
    this._synchronize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synchronizeInput() {
    return this._synchronize;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // vendor_type - computed: false, optional: false, required: true
  private _vendorType?: string; 
  public get vendorType() {
    return this.getStringAttribute('vendor_type');
  }
  public set vendorType(value: string) {
    this._vendorType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorTypeInput() {
    return this._vendorType;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_token: cdktf.stringToTerraform(this._apiToken),
      firewall_name: cdktf.stringToTerraform(this._firewallName),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      number_of_retries: cdktf.numberToTerraform(this._numberOfRetries),
      password: cdktf.stringToTerraform(this._password),
      private_key_file: cdktf.stringToTerraform(this._privateKeyFile),
      public_ip: cdktf.stringToTerraform(this._publicIp),
      retry_interval: cdktf.numberToTerraform(this._retryInterval),
      route_table: cdktf.stringToTerraform(this._routeTable),
      save: cdktf.booleanToTerraform(this._save),
      synchronize: cdktf.booleanToTerraform(this._synchronize),
      username: cdktf.stringToTerraform(this._username),
      vendor_type: cdktf.stringToTerraform(this._vendorType),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_token: {
        value: cdktf.stringToHclTerraform(this._apiToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firewall_name: {
        value: cdktf.stringToHclTerraform(this._firewallName),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      number_of_retries: {
        value: cdktf.numberToHclTerraform(this._numberOfRetries),
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
      private_key_file: {
        value: cdktf.stringToHclTerraform(this._privateKeyFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_ip: {
        value: cdktf.stringToHclTerraform(this._publicIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retry_interval: {
        value: cdktf.numberToHclTerraform(this._retryInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      route_table: {
        value: cdktf.stringToHclTerraform(this._routeTable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      save: {
        value: cdktf.booleanToHclTerraform(this._save),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      synchronize: {
        value: cdktf.booleanToHclTerraform(this._synchronize),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vendor_type: {
        value: cdktf.stringToHclTerraform(this._vendorType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
