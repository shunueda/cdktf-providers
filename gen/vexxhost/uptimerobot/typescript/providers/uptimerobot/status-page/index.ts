// https://registry.terraform.io/providers/vexxhost/uptimerobot/0.8.2/docs/resources/status_page
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StatusPageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vexxhost/uptimerobot/0.8.2/docs/resources/status_page#custom_domain StatusPage#custom_domain}
  */
  readonly customDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vexxhost/uptimerobot/0.8.2/docs/resources/status_page#friendly_name StatusPage#friendly_name}
  */
  readonly friendlyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vexxhost/uptimerobot/0.8.2/docs/resources/status_page#id StatusPage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vexxhost/uptimerobot/0.8.2/docs/resources/status_page#monitors StatusPage#monitors}
  */
  readonly monitors?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vexxhost/uptimerobot/0.8.2/docs/resources/status_page#password StatusPage#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vexxhost/uptimerobot/0.8.2/docs/resources/status_page#sort StatusPage#sort}
  */
  readonly sort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vexxhost/uptimerobot/0.8.2/docs/resources/status_page#status StatusPage#status}
  */
  readonly status?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vexxhost/uptimerobot/0.8.2/docs/resources/status_page uptimerobot_status_page}
*/
export class StatusPage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "uptimerobot_status_page";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StatusPage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StatusPage to import
  * @param importFromId The id of the existing StatusPage that should be imported. Refer to the {@link https://registry.terraform.io/providers/vexxhost/uptimerobot/0.8.2/docs/resources/status_page#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StatusPage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "uptimerobot_status_page", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vexxhost/uptimerobot/0.8.2/docs/resources/status_page uptimerobot_status_page} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StatusPageConfig
  */
  public constructor(scope: Construct, id: string, config: StatusPageConfig) {
    super(scope, id, {
      terraformResourceType: 'uptimerobot_status_page',
      terraformGeneratorMetadata: {
        providerName: 'uptimerobot',
        providerVersion: '0.8.2',
        providerVersionConstraint: '0.8.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customDomain = config.customDomain;
    this._friendlyName = config.friendlyName;
    this._id = config.id;
    this._monitors = config.monitors;
    this._password = config.password;
    this._sort = config.sort;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_domain - computed: false, optional: true, required: false
  private _customDomain?: string; 
  public get customDomain() {
    return this.getStringAttribute('custom_domain');
  }
  public set customDomain(value: string) {
    this._customDomain = value;
  }
  public resetCustomDomain() {
    this._customDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDomainInput() {
    return this._customDomain;
  }

  // custom_url - computed: true, optional: false, required: false
  public get customUrl() {
    return this.getStringAttribute('custom_url');
  }

  // dns_address - computed: true, optional: false, required: false
  public get dnsAddress() {
    return this.getStringAttribute('dns_address');
  }

  // friendly_name - computed: false, optional: false, required: true
  private _friendlyName?: string; 
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string) {
    this._friendlyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get friendlyNameInput() {
    return this._friendlyName;
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

  // monitors - computed: false, optional: true, required: false
  private _monitors?: number[]; 
  public get monitors() {
    return this.getNumberListAttribute('monitors');
  }
  public set monitors(value: number[]) {
    this._monitors = value;
  }
  public resetMonitors() {
    this._monitors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorsInput() {
    return this._monitors;
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

  // sort - computed: false, optional: true, required: false
  private _sort?: string; 
  public get sort() {
    return this.getStringAttribute('sort');
  }
  public set sort(value: string) {
    this._sort = value;
  }
  public resetSort() {
    this._sort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortInput() {
    return this._sort;
  }

  // standard_url - computed: true, optional: false, required: false
  public get standardUrl() {
    return this.getStringAttribute('standard_url');
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_domain: cdktf.stringToTerraform(this._customDomain),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      id: cdktf.stringToTerraform(this._id),
      monitors: cdktf.listMapper(cdktf.numberToTerraform, false)(this._monitors),
      password: cdktf.stringToTerraform(this._password),
      sort: cdktf.stringToTerraform(this._sort),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_domain: {
        value: cdktf.stringToHclTerraform(this._customDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      friendly_name: {
        value: cdktf.stringToHclTerraform(this._friendlyName),
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
      monitors: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._monitors),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sort: {
        value: cdktf.stringToHclTerraform(this._sort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
