// https://registry.terraform.io/providers/dodevops/ldap/0.4.0/docs/resources/object
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The definition of an attribute, the name defines the type of the attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dodevops/ldap/0.4.0/docs/resources/object#attributes ObjectResource#attributes}
  */
  readonly attributes?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * DN of this ldap object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dodevops/ldap/0.4.0/docs/resources/object#dn ObjectResource#dn}
  */
  readonly dn: string;
  /**
  * A list of types for which changes are ignored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dodevops/ldap/0.4.0/docs/resources/object#ignore_changes ObjectResource#ignore_changes}
  */
  readonly ignoreChanges?: string[];
  /**
  * A list of classes this object implements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dodevops/ldap/0.4.0/docs/resources/object#object_classes ObjectResource#object_classes}
  */
  readonly objectClasses: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/dodevops/ldap/0.4.0/docs/resources/object ldap_object}
*/
export class ObjectResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ldap_object";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectResource to import
  * @param importFromId The id of the existing ObjectResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/dodevops/ldap/0.4.0/docs/resources/object#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ldap_object", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dodevops/ldap/0.4.0/docs/resources/object ldap_object} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectResourceConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'ldap_object',
      terraformGeneratorMetadata: {
        providerName: 'ldap',
        providerVersion: '0.4.0',
        providerVersionConstraint: '0.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attributes = config.attributes;
    this._dn = config.dn;
    this._ignoreChanges = config.ignoreChanges;
    this._objectClasses = config.objectClasses;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attributes - computed: false, optional: true, required: false
  private _attributes?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get attributes() {
    return this.interpolationForAttribute('attributes');
  }
  public set attributes(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // dn - computed: false, optional: false, required: true
  private _dn?: string; 
  public get dn() {
    return this.getStringAttribute('dn');
  }
  public set dn(value: string) {
    this._dn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnInput() {
    return this._dn;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_changes - computed: false, optional: true, required: false
  private _ignoreChanges?: string[]; 
  public get ignoreChanges() {
    return this.getListAttribute('ignore_changes');
  }
  public set ignoreChanges(value: string[]) {
    this._ignoreChanges = value;
  }
  public resetIgnoreChanges() {
    this._ignoreChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreChangesInput() {
    return this._ignoreChanges;
  }

  // object_classes - computed: false, optional: false, required: true
  private _objectClasses?: string[]; 
  public get objectClasses() {
    return this.getListAttribute('object_classes');
  }
  public set objectClasses(value: string[]) {
    this._objectClasses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectClassesInput() {
    return this._objectClasses;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attributes: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(this._attributes),
      dn: cdktf.stringToTerraform(this._dn),
      ignore_changes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ignoreChanges),
      object_classes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._objectClasses),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attributes: {
        value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(this._attributes),
        isBlock: false,
        type: "map",
        storageClassType: "stringListMap",
      },
      dn: {
        value: cdktf.stringToHclTerraform(this._dn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_changes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ignoreChanges),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      object_classes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._objectClasses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
