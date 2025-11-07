// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/data-sources/firenet_firewall_manager
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAviatrixFirenetFirewallManagerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The FireNet gateway name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/data-sources/firenet_firewall_manager#gateway_name DataAviatrixFirenetFirewallManager#gateway_name}
  */
  readonly gatewayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/data-sources/firenet_firewall_manager#id DataAviatrixFirenetFirewallManager#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Number of retries for 'save' or 'synchronize'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/data-sources/firenet_firewall_manager#number_of_retries DataAviatrixFirenetFirewallManager#number_of_retries}
  */
  readonly numberOfRetries?: number;
  /**
  * Panorama login password for API calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/data-sources/firenet_firewall_manager#password DataAviatrixFirenetFirewallManager#password}
  */
  readonly password?: string;
  /**
  * The public IP address of the Panorama instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/data-sources/firenet_firewall_manager#public_ip DataAviatrixFirenetFirewallManager#public_ip}
  */
  readonly publicIp?: string;
  /**
  * Retry interval in seconds for `save` or `synchronize`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/data-sources/firenet_firewall_manager#retry_interval DataAviatrixFirenetFirewallManager#retry_interval}
  */
  readonly retryInterval?: number;
  /**
  * The name of firewall virtual router to program. If left unspecified, the Controller programs the Panorama template’s first router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/data-sources/firenet_firewall_manager#route_table DataAviatrixFirenetFirewallManager#route_table}
  */
  readonly routeTable?: string;
  /**
  * Switch to save or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/data-sources/firenet_firewall_manager#save DataAviatrixFirenetFirewallManager#save}
  */
  readonly save?: boolean | cdktf.IResolvable;
  /**
  * Switch to sync or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/data-sources/firenet_firewall_manager#synchronize DataAviatrixFirenetFirewallManager#synchronize}
  */
  readonly synchronize?: boolean | cdktf.IResolvable;
  /**
  * Panorama template for each FireNet gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/data-sources/firenet_firewall_manager#template DataAviatrixFirenetFirewallManager#template}
  */
  readonly template?: string;
  /**
  * Panorama template stack for each FireNet gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/data-sources/firenet_firewall_manager#template_stack DataAviatrixFirenetFirewallManager#template_stack}
  */
  readonly templateStack?: string;
  /**
  * Panorama login name for API calls from the Controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/data-sources/firenet_firewall_manager#username DataAviatrixFirenetFirewallManager#username}
  */
  readonly username?: string;
  /**
  * Vendor type. Valid values: 'Generic' and 'Palo Alto Networks Panorama'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/data-sources/firenet_firewall_manager#vendor_type DataAviatrixFirenetFirewallManager#vendor_type}
  */
  readonly vendorType: string;
  /**
  * VPC ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/data-sources/firenet_firewall_manager#vpc_id DataAviatrixFirenetFirewallManager#vpc_id}
  */
  readonly vpcId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/data-sources/firenet_firewall_manager aviatrix_firenet_firewall_manager}
*/
export class DataAviatrixFirenetFirewallManager extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_firenet_firewall_manager";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAviatrixFirenetFirewallManager resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAviatrixFirenetFirewallManager to import
  * @param importFromId The id of the existing DataAviatrixFirenetFirewallManager that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/data-sources/firenet_firewall_manager#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAviatrixFirenetFirewallManager to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_firenet_firewall_manager", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/data-sources/firenet_firewall_manager aviatrix_firenet_firewall_manager} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAviatrixFirenetFirewallManagerConfig
  */
  public constructor(scope: Construct, id: string, config: DataAviatrixFirenetFirewallManagerConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_firenet_firewall_manager',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.1.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._gatewayName = config.gatewayName;
    this._id = config.id;
    this._numberOfRetries = config.numberOfRetries;
    this._password = config.password;
    this._publicIp = config.publicIp;
    this._retryInterval = config.retryInterval;
    this._routeTable = config.routeTable;
    this._save = config.save;
    this._synchronize = config.synchronize;
    this._template = config.template;
    this._templateStack = config.templateStack;
    this._username = config.username;
    this._vendorType = config.vendorType;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // gateway_name - computed: false, optional: false, required: true
  private _gatewayName?: string; 
  public get gatewayName() {
    return this.getStringAttribute('gateway_name');
  }
  public set gatewayName(value: string) {
    this._gatewayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayNameInput() {
    return this._gatewayName;
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

  // template - computed: false, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // template_stack - computed: false, optional: true, required: false
  private _templateStack?: string; 
  public get templateStack() {
    return this.getStringAttribute('template_stack');
  }
  public set templateStack(value: string) {
    this._templateStack = value;
  }
  public resetTemplateStack() {
    this._templateStack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateStackInput() {
    return this._templateStack;
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
      gateway_name: cdktf.stringToTerraform(this._gatewayName),
      id: cdktf.stringToTerraform(this._id),
      number_of_retries: cdktf.numberToTerraform(this._numberOfRetries),
      password: cdktf.stringToTerraform(this._password),
      public_ip: cdktf.stringToTerraform(this._publicIp),
      retry_interval: cdktf.numberToTerraform(this._retryInterval),
      route_table: cdktf.stringToTerraform(this._routeTable),
      save: cdktf.booleanToTerraform(this._save),
      synchronize: cdktf.booleanToTerraform(this._synchronize),
      template: cdktf.stringToTerraform(this._template),
      template_stack: cdktf.stringToTerraform(this._templateStack),
      username: cdktf.stringToTerraform(this._username),
      vendor_type: cdktf.stringToTerraform(this._vendorType),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      gateway_name: {
        value: cdktf.stringToHclTerraform(this._gatewayName),
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
      template: {
        value: cdktf.stringToHclTerraform(this._template),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_stack: {
        value: cdktf.stringToHclTerraform(this._templateStack),
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
