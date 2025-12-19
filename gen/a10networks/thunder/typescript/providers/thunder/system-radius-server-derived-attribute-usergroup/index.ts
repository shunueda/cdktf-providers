// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_radius_server_derived_attribute_usergroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemRadiusServerDerivedAttributeUsergroupAConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'imei': Specify the IMEI attribute.; 'imsi': Specify the IMSI attribute.; 'msisdn': Specify the MSISDN attribute.; 'custom1': Specify the custom1 attribute.; 'custom2': Specify the custom2 attribute.; 'custom3': Specify the custom3 attribute.; 'custom4': Specify the custom4 attribute.; 'custom5': Specify the custom5 attribute.; 'custom6': Specify the custom6 attribute.;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_radius_server_derived_attribute_usergroup#attribute SystemRadiusServerDerivedAttributeUsergroupA#attribute}
  */
  readonly attribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_radius_server_derived_attribute_usergroup#id SystemRadiusServerDerivedAttributeUsergroupA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify the regular expression to parse the value from a RADIUS attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_radius_server_derived_attribute_usergroup#regex SystemRadiusServerDerivedAttributeUsergroupA#regex}
  */
  readonly regex?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_radius_server_derived_attribute_usergroup#uuid SystemRadiusServerDerivedAttributeUsergroupA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_radius_server_derived_attribute_usergroup thunder_system_radius_server_derived_attribute_usergroup}
*/
export class SystemRadiusServerDerivedAttributeUsergroupA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_radius_server_derived_attribute_usergroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemRadiusServerDerivedAttributeUsergroupA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemRadiusServerDerivedAttributeUsergroupA to import
  * @param importFromId The id of the existing SystemRadiusServerDerivedAttributeUsergroupA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_radius_server_derived_attribute_usergroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemRadiusServerDerivedAttributeUsergroupA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_radius_server_derived_attribute_usergroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_radius_server_derived_attribute_usergroup thunder_system_radius_server_derived_attribute_usergroup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemRadiusServerDerivedAttributeUsergroupAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemRadiusServerDerivedAttributeUsergroupAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_radius_server_derived_attribute_usergroup',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attribute = config.attribute;
    this._id = config.id;
    this._regex = config.regex;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attribute - computed: false, optional: true, required: false
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
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

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attribute: cdktf.stringToTerraform(this._attribute),
      id: cdktf.stringToTerraform(this._id),
      regex: cdktf.stringToTerraform(this._regex),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attribute: {
        value: cdktf.stringToHclTerraform(this._attribute),
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
      regex: {
        value: cdktf.stringToHclTerraform(this._regex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
