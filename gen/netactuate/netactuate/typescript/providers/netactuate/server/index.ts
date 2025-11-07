// https://registry.terraform.io/providers/netactuate/netactuate/0.2.4/docs/resources/server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netactuate/netactuate/0.2.4/docs/resources/server#cloud_config Server#cloud_config}
  */
  readonly cloudConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netactuate/netactuate/0.2.4/docs/resources/server#hostname Server#hostname}
  */
  readonly hostname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netactuate/netactuate/0.2.4/docs/resources/server#id Server#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netactuate/netactuate/0.2.4/docs/resources/server#image Server#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netactuate/netactuate/0.2.4/docs/resources/server#image_id Server#image_id}
  */
  readonly imageId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netactuate/netactuate/0.2.4/docs/resources/server#location Server#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netactuate/netactuate/0.2.4/docs/resources/server#location_id Server#location_id}
  */
  readonly locationId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netactuate/netactuate/0.2.4/docs/resources/server#package_billing Server#package_billing}
  */
  readonly packageBilling?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netactuate/netactuate/0.2.4/docs/resources/server#package_billing_contract_id Server#package_billing_contract_id}
  */
  readonly packageBillingContractId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netactuate/netactuate/0.2.4/docs/resources/server#package_billing_opt_in Server#package_billing_opt_in}
  */
  readonly packageBillingOptIn?: string;
  /**
  * Additional JSON formatted parameters to be passed to the server creation and management API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netactuate/netactuate/0.2.4/docs/resources/server#params Server#params}
  */
  readonly params?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netactuate/netactuate/0.2.4/docs/resources/server#password Server#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netactuate/netactuate/0.2.4/docs/resources/server#plan Server#plan}
  */
  readonly plan: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netactuate/netactuate/0.2.4/docs/resources/server#ssh_key Server#ssh_key}
  */
  readonly sshKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netactuate/netactuate/0.2.4/docs/resources/server#ssh_key_id Server#ssh_key_id}
  */
  readonly sshKeyId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netactuate/netactuate/0.2.4/docs/resources/server#user_data Server#user_data}
  */
  readonly userData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netactuate/netactuate/0.2.4/docs/resources/server#user_data_base64 Server#user_data_base64}
  */
  readonly userDataBase64?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netactuate/netactuate/0.2.4/docs/resources/server netactuate_server}
*/
export class Server extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netactuate_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Server resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Server to import
  * @param importFromId The id of the existing Server that should be imported. Refer to the {@link https://registry.terraform.io/providers/netactuate/netactuate/0.2.4/docs/resources/server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Server to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netactuate_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netactuate/netactuate/0.2.4/docs/resources/server netactuate_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServerConfig
  */
  public constructor(scope: Construct, id: string, config: ServerConfig) {
    super(scope, id, {
      terraformResourceType: 'netactuate_server',
      terraformGeneratorMetadata: {
        providerName: 'netactuate',
        providerVersion: '0.2.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudConfig = config.cloudConfig;
    this._hostname = config.hostname;
    this._id = config.id;
    this._image = config.image;
    this._imageId = config.imageId;
    this._location = config.location;
    this._locationId = config.locationId;
    this._packageBilling = config.packageBilling;
    this._packageBillingContractId = config.packageBillingContractId;
    this._packageBillingOptIn = config.packageBillingOptIn;
    this._params = config.params;
    this._password = config.password;
    this._plan = config.plan;
    this._sshKey = config.sshKey;
    this._sshKeyId = config.sshKeyId;
    this._userData = config.userData;
    this._userDataBase64 = config.userDataBase64;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_config - computed: false, optional: true, required: false
  private _cloudConfig?: string; 
  public get cloudConfig() {
    return this.getStringAttribute('cloud_config');
  }
  public set cloudConfig(value: string) {
    this._cloudConfig = value;
  }
  public resetCloudConfig() {
    this._cloudConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudConfigInput() {
    return this._cloudConfig;
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // image_id - computed: false, optional: true, required: false
  private _imageId?: number; 
  public get imageId() {
    return this.getNumberAttribute('image_id');
  }
  public set imageId(value: number) {
    this._imageId = value;
  }
  public resetImageId() {
    this._imageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // location_id - computed: true, optional: true, required: false
  private _locationId?: number; 
  public get locationId() {
    return this.getNumberAttribute('location_id');
  }
  public set locationId(value: number) {
    this._locationId = value;
  }
  public resetLocationId() {
    this._locationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationIdInput() {
    return this._locationId;
  }

  // package_billing - computed: false, optional: true, required: false
  private _packageBilling?: string; 
  public get packageBilling() {
    return this.getStringAttribute('package_billing');
  }
  public set packageBilling(value: string) {
    this._packageBilling = value;
  }
  public resetPackageBilling() {
    this._packageBilling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageBillingInput() {
    return this._packageBilling;
  }

  // package_billing_contract_id - computed: false, optional: true, required: false
  private _packageBillingContractId?: string; 
  public get packageBillingContractId() {
    return this.getStringAttribute('package_billing_contract_id');
  }
  public set packageBillingContractId(value: string) {
    this._packageBillingContractId = value;
  }
  public resetPackageBillingContractId() {
    this._packageBillingContractId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageBillingContractIdInput() {
    return this._packageBillingContractId;
  }

  // package_billing_opt_in - computed: false, optional: true, required: false
  private _packageBillingOptIn?: string; 
  public get packageBillingOptIn() {
    return this.getStringAttribute('package_billing_opt_in');
  }
  public set packageBillingOptIn(value: string) {
    this._packageBillingOptIn = value;
  }
  public resetPackageBillingOptIn() {
    this._packageBillingOptIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageBillingOptInInput() {
    return this._packageBillingOptIn;
  }

  // params - computed: false, optional: true, required: false
  private _params?: string; 
  public get params() {
    return this.getStringAttribute('params');
  }
  public set params(value: string) {
    this._params = value;
  }
  public resetParams() {
    this._params = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params;
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

  // plan - computed: false, optional: false, required: true
  private _plan?: string; 
  public get plan() {
    return this.getStringAttribute('plan');
  }
  public set plan(value: string) {
    this._plan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan;
  }

  // primary_ipv4 - computed: true, optional: false, required: false
  public get primaryIpv4() {
    return this.getStringAttribute('primary_ipv4');
  }

  // primary_ipv6 - computed: true, optional: false, required: false
  public get primaryIpv6() {
    return this.getStringAttribute('primary_ipv6');
  }

  // ssh_key - computed: false, optional: true, required: false
  private _sshKey?: string; 
  public get sshKey() {
    return this.getStringAttribute('ssh_key');
  }
  public set sshKey(value: string) {
    this._sshKey = value;
  }
  public resetSshKey() {
    this._sshKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyInput() {
    return this._sshKey;
  }

  // ssh_key_id - computed: false, optional: true, required: false
  private _sshKeyId?: number; 
  public get sshKeyId() {
    return this.getNumberAttribute('ssh_key_id');
  }
  public set sshKeyId(value: number) {
    this._sshKeyId = value;
  }
  public resetSshKeyId() {
    this._sshKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyIdInput() {
    return this._sshKeyId;
  }

  // user_data - computed: false, optional: true, required: false
  private _userData?: string; 
  public get userData() {
    return this.getStringAttribute('user_data');
  }
  public set userData(value: string) {
    this._userData = value;
  }
  public resetUserData() {
    this._userData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData;
  }

  // user_data_base64 - computed: false, optional: true, required: false
  private _userDataBase64?: string; 
  public get userDataBase64() {
    return this.getStringAttribute('user_data_base64');
  }
  public set userDataBase64(value: string) {
    this._userDataBase64 = value;
  }
  public resetUserDataBase64() {
    this._userDataBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataBase64Input() {
    return this._userDataBase64;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_config: cdktf.stringToTerraform(this._cloudConfig),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      image: cdktf.stringToTerraform(this._image),
      image_id: cdktf.numberToTerraform(this._imageId),
      location: cdktf.stringToTerraform(this._location),
      location_id: cdktf.numberToTerraform(this._locationId),
      package_billing: cdktf.stringToTerraform(this._packageBilling),
      package_billing_contract_id: cdktf.stringToTerraform(this._packageBillingContractId),
      package_billing_opt_in: cdktf.stringToTerraform(this._packageBillingOptIn),
      params: cdktf.stringToTerraform(this._params),
      password: cdktf.stringToTerraform(this._password),
      plan: cdktf.stringToTerraform(this._plan),
      ssh_key: cdktf.stringToTerraform(this._sshKey),
      ssh_key_id: cdktf.numberToTerraform(this._sshKeyId),
      user_data: cdktf.stringToTerraform(this._userData),
      user_data_base64: cdktf.stringToTerraform(this._userDataBase64),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_config: {
        value: cdktf.stringToHclTerraform(this._cloudConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
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
      image: {
        value: cdktf.stringToHclTerraform(this._image),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_id: {
        value: cdktf.numberToHclTerraform(this._imageId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location_id: {
        value: cdktf.numberToHclTerraform(this._locationId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      package_billing: {
        value: cdktf.stringToHclTerraform(this._packageBilling),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      package_billing_contract_id: {
        value: cdktf.stringToHclTerraform(this._packageBillingContractId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      package_billing_opt_in: {
        value: cdktf.stringToHclTerraform(this._packageBillingOptIn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      params: {
        value: cdktf.stringToHclTerraform(this._params),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plan: {
        value: cdktf.stringToHclTerraform(this._plan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_key: {
        value: cdktf.stringToHclTerraform(this._sshKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_key_id: {
        value: cdktf.numberToHclTerraform(this._sshKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_data: {
        value: cdktf.stringToHclTerraform(this._userData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_data_base64: {
        value: cdktf.stringToHclTerraform(this._userDataBase64),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
