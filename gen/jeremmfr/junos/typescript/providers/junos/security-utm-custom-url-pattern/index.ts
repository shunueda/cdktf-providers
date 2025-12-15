// https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_utm_custom_url_pattern
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityUtmCustomUrlPatternConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of security utm custom-object url-pattern.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_utm_custom_url_pattern#name SecurityUtmCustomUrlPattern#name}
  */
  readonly name: string;
  /**
  * List of url for security utm custom-object url-pattern.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_utm_custom_url_pattern#value SecurityUtmCustomUrlPattern#value}
  */
  readonly value: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_utm_custom_url_pattern junos_security_utm_custom_url_pattern}
*/
export class SecurityUtmCustomUrlPattern extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_security_utm_custom_url_pattern";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityUtmCustomUrlPattern resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityUtmCustomUrlPattern to import
  * @param importFromId The id of the existing SecurityUtmCustomUrlPattern that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_utm_custom_url_pattern#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityUtmCustomUrlPattern to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_security_utm_custom_url_pattern", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_utm_custom_url_pattern junos_security_utm_custom_url_pattern} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityUtmCustomUrlPatternConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityUtmCustomUrlPatternConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_security_utm_custom_url_pattern',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.16.0',
        providerVersionConstraint: '2.16.0'
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
    this._value = config.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string[]; 
  public get value() {
    return this.getListAttribute('value');
  }
  public set value(value: string[]) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      value: cdktf.listMapper(cdktf.stringToTerraform, false)(this._value),
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
      value: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._value),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
