// https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/user_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the user group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/user_group#name UserGroup#name}
  */
  readonly name: string;
  /**
  * The QOS maximum download rate. Defaults to `-1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/user_group#qos_rate_max_down UserGroup#qos_rate_max_down}
  */
  readonly qosRateMaxDown?: number;
  /**
  * The QOS maximum upload rate. Defaults to `-1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/user_group#qos_rate_max_up UserGroup#qos_rate_max_up}
  */
  readonly qosRateMaxUp?: number;
  /**
  * The name of the site to associate the user group with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/user_group#site UserGroup#site}
  */
  readonly site?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/user_group unifi_user_group}
*/
export class UserGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "unifi_user_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserGroup to import
  * @param importFromId The id of the existing UserGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/user_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "unifi_user_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paultyng/unifi/0.41.0/docs/resources/user_group unifi_user_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserGroupConfig
  */
  public constructor(scope: Construct, id: string, config: UserGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'unifi_user_group',
      terraformGeneratorMetadata: {
        providerName: 'unifi',
        providerVersion: '0.41.0',
        providerVersionConstraint: '0.41.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._qosRateMaxDown = config.qosRateMaxDown;
    this._qosRateMaxUp = config.qosRateMaxUp;
    this._site = config.site;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // qos_rate_max_down - computed: false, optional: true, required: false
  private _qosRateMaxDown?: number; 
  public get qosRateMaxDown() {
    return this.getNumberAttribute('qos_rate_max_down');
  }
  public set qosRateMaxDown(value: number) {
    this._qosRateMaxDown = value;
  }
  public resetQosRateMaxDown() {
    this._qosRateMaxDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosRateMaxDownInput() {
    return this._qosRateMaxDown;
  }

  // qos_rate_max_up - computed: false, optional: true, required: false
  private _qosRateMaxUp?: number; 
  public get qosRateMaxUp() {
    return this.getNumberAttribute('qos_rate_max_up');
  }
  public set qosRateMaxUp(value: number) {
    this._qosRateMaxUp = value;
  }
  public resetQosRateMaxUp() {
    this._qosRateMaxUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosRateMaxUpInput() {
    return this._qosRateMaxUp;
  }

  // site - computed: true, optional: true, required: false
  private _site?: string; 
  public get site() {
    return this.getStringAttribute('site');
  }
  public set site(value: string) {
    this._site = value;
  }
  public resetSite() {
    this._site = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      qos_rate_max_down: cdktf.numberToTerraform(this._qosRateMaxDown),
      qos_rate_max_up: cdktf.numberToTerraform(this._qosRateMaxUp),
      site: cdktf.stringToTerraform(this._site),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      qos_rate_max_down: {
        value: cdktf.numberToHclTerraform(this._qosRateMaxDown),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      qos_rate_max_up: {
        value: cdktf.numberToHclTerraform(this._qosRateMaxUp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      site: {
        value: cdktf.stringToHclTerraform(this._site),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
