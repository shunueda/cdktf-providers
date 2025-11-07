// https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_internal_policies_clone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityInternalPoliciesCloneConfig extends cdktf.TerraformMetaArguments {
  /**
  * The policy you what to clone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_internal_policies_clone#based_on SecurityInternalPoliciesClone#based_on}
  */
  readonly basedOn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_internal_policies_clone#primary_key SecurityInternalPoliciesClone#primary_key}
  */
  readonly primaryKey?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_internal_policies_clone fortisase_security_internal_policies_clone}
*/
export class SecurityInternalPoliciesClone extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortisase_security_internal_policies_clone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityInternalPoliciesClone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityInternalPoliciesClone to import
  * @param importFromId The id of the existing SecurityInternalPoliciesClone that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_internal_policies_clone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityInternalPoliciesClone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortisase_security_internal_policies_clone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_internal_policies_clone fortisase_security_internal_policies_clone} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityInternalPoliciesCloneConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SecurityInternalPoliciesCloneConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortisase_security_internal_policies_clone',
      terraformGeneratorMetadata: {
        providerName: 'fortisase',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._basedOn = config.basedOn;
    this._primaryKey = config.primaryKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // based_on - computed: true, optional: true, required: false
  private _basedOn?: string; 
  public get basedOn() {
    return this.getStringAttribute('based_on');
  }
  public set basedOn(value: string) {
    this._basedOn = value;
  }
  public resetBasedOn() {
    this._basedOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basedOnInput() {
    return this._basedOn;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // primary_key - computed: true, optional: true, required: false
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      based_on: cdktf.stringToTerraform(this._basedOn),
      primary_key: cdktf.stringToTerraform(this._primaryKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      based_on: {
        value: cdktf.stringToHclTerraform(this._basedOn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_key: {
        value: cdktf.stringToHclTerraform(this._primaryKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
