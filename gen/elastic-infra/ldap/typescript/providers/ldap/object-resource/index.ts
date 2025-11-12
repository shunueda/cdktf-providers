// https://registry.terraform.io/providers/elastic-infra/ldap/2.0.1/docs/resources/object
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The map of attributes of this object; each attribute can be multi-valued.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic-infra/ldap/2.0.1/docs/resources/object#attributes ObjectResource#attributes}
  */
  readonly attributes?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * The Distinguished Name (DN) of the object, as the concatenation of its RDN (unique among siblings) and its parent's DN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic-infra/ldap/2.0.1/docs/resources/object#dn ObjectResource#dn}
  */
  readonly dn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic-infra/ldap/2.0.1/docs/resources/object#id ObjectResource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The set of classes this object conforms to (e.g. organizationalUnit, inetOrgPerson).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic-infra/ldap/2.0.1/docs/resources/object#object_classes ObjectResource#object_classes}
  */
  readonly objectClasses: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic-infra/ldap/2.0.1/docs/resources/object ldap_object}
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
  * @param importFromId The id of the existing ObjectResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic-infra/ldap/2.0.1/docs/resources/object#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ldap_object", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic-infra/ldap/2.0.1/docs/resources/object ldap_object} Resource
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
        providerVersion: '2.0.1',
        providerVersionConstraint: '2.0.1'
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
    this._id = config.id;
    this._objectClasses = config.objectClasses;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attributes - computed: false, optional: true, required: false
  private _attributes?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get attributes() {
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('attributes')));
  }
  public set attributes(value: { [key: string]: string }[] | cdktf.IResolvable) {
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

  // object_classes - computed: false, optional: false, required: true
  private _objectClasses?: string[]; 
  public get objectClasses() {
    return cdktf.Fn.tolist(this.getListAttribute('object_classes'));
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
      attributes: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(this._attributes),
      dn: cdktf.stringToTerraform(this._dn),
      id: cdktf.stringToTerraform(this._id),
      object_classes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._objectClasses),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attributes: {
        value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(this._attributes),
        isBlock: false,
        type: "set",
        storageClassType: "stringMapList",
      },
      dn: {
        value: cdktf.stringToHclTerraform(this._dn),
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
      object_classes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._objectClasses),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
