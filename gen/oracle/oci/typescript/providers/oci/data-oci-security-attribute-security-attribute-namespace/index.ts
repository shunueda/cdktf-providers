// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/security_attribute_security_attribute_namespace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciSecurityAttributeSecurityAttributeNamespaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/security_attribute_security_attribute_namespace#security_attribute_namespace_id DataOciSecurityAttributeSecurityAttributeNamespace#security_attribute_namespace_id}
  */
  readonly securityAttributeNamespaceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/security_attribute_security_attribute_namespace oci_security_attribute_security_attribute_namespace}
*/
export class DataOciSecurityAttributeSecurityAttributeNamespace extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_security_attribute_security_attribute_namespace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciSecurityAttributeSecurityAttributeNamespace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciSecurityAttributeSecurityAttributeNamespace to import
  * @param importFromId The id of the existing DataOciSecurityAttributeSecurityAttributeNamespace that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/security_attribute_security_attribute_namespace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciSecurityAttributeSecurityAttributeNamespace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_security_attribute_security_attribute_namespace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/security_attribute_security_attribute_namespace oci_security_attribute_security_attribute_namespace} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciSecurityAttributeSecurityAttributeNamespaceConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciSecurityAttributeSecurityAttributeNamespaceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_security_attribute_security_attribute_namespace',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._securityAttributeNamespaceId = config.securityAttributeNamespaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_retired - computed: true, optional: false, required: false
  public get isRetired() {
    return this.getBooleanAttribute('is_retired');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getListAttribute('mode');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // security_attribute_namespace_id - computed: false, optional: false, required: true
  private _securityAttributeNamespaceId?: string; 
  public get securityAttributeNamespaceId() {
    return this.getStringAttribute('security_attribute_namespace_id');
  }
  public set securityAttributeNamespaceId(value: string) {
    this._securityAttributeNamespaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityAttributeNamespaceIdInput() {
    return this._securityAttributeNamespaceId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      security_attribute_namespace_id: cdktf.stringToTerraform(this._securityAttributeNamespaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      security_attribute_namespace_id: {
        value: cdktf.stringToHclTerraform(this._securityAttributeNamespaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
