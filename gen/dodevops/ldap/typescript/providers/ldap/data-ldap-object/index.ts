// https://registry.terraform.io/providers/dodevops/ldap/0.4.0/docs/data-sources/object
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLdapObjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Any additional attributes to request, such as constructed attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dodevops/ldap/0.4.0/docs/data-sources/object#additional_attributes DataLdapObject#additional_attributes}
  */
  readonly additionalAttributes?: string[];
  /**
  * DN of this ldap object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dodevops/ldap/0.4.0/docs/data-sources/object#dn DataLdapObject#dn}
  */
  readonly dn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dodevops/ldap/0.4.0/docs/data-sources/object ldap_object}
*/
export class DataLdapObject extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ldap_object";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLdapObject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLdapObject to import
  * @param importFromId The id of the existing DataLdapObject that should be imported. Refer to the {@link https://registry.terraform.io/providers/dodevops/ldap/0.4.0/docs/data-sources/object#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLdapObject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ldap_object", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dodevops/ldap/0.4.0/docs/data-sources/object ldap_object} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLdapObjectConfig
  */
  public constructor(scope: Construct, id: string, config: DataLdapObjectConfig) {
    super(scope, id, {
      terraformResourceType: 'ldap_object',
      terraformGeneratorMetadata: {
        providerName: 'ldap',
        providerVersion: '0.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._additionalAttributes = config.additionalAttributes;
    this._dn = config.dn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_attributes - computed: false, optional: true, required: false
  private _additionalAttributes?: string[]; 
  public get additionalAttributes() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_attributes'));
  }
  public set additionalAttributes(value: string[]) {
    this._additionalAttributes = value;
  }
  public resetAdditionalAttributes() {
    this._additionalAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalAttributesInput() {
    return this._additionalAttributes;
  }

  // attributes - computed: true, optional: false, required: false
  private _attributes = new cdktf.StringListMap(this, "attributes");
  public get attributes() {
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

  // object_classes - computed: true, optional: false, required: false
  public get objectClasses() {
    return this.getListAttribute('object_classes');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._additionalAttributes),
      dn: cdktf.stringToTerraform(this._dn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_attributes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._additionalAttributes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dn: {
        value: cdktf.stringToHclTerraform(this._dn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
