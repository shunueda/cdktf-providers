// https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/data-sources/waap_domain_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGcoreWaapDomainPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The WAAP domain ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/data-sources/waap_domain_policy#domain_id DataGcoreWaapDomainPolicy#domain_id}
  */
  readonly domainId: number;
  /**
  * The policy group name to which the policy belongs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/data-sources/waap_domain_policy#group DataGcoreWaapDomainPolicy#group}
  */
  readonly group: string;
  /**
  * The name of the Domain Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/data-sources/waap_domain_policy#name DataGcoreWaapDomainPolicy#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/data-sources/waap_domain_policy gcore_waap_domain_policy}
*/
export class DataGcoreWaapDomainPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gcore_waap_domain_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGcoreWaapDomainPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGcoreWaapDomainPolicy to import
  * @param importFromId The id of the existing DataGcoreWaapDomainPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/data-sources/waap_domain_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGcoreWaapDomainPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gcore_waap_domain_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/data-sources/waap_domain_policy gcore_waap_domain_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGcoreWaapDomainPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataGcoreWaapDomainPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'gcore_waap_domain_policy',
      terraformGeneratorMetadata: {
        providerName: 'gcore',
        providerVersion: '0.31.4',
        providerVersionConstraint: '0.31.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domainId = config.domainId;
    this._group = config.group;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain_id - computed: false, optional: false, required: true
  private _domainId?: number; 
  public get domainId() {
    return this.getNumberAttribute('domain_id');
  }
  public set domainId(value: number) {
    this._domainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
  }

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_id: cdktf.numberToTerraform(this._domainId),
      group: cdktf.stringToTerraform(this._group),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain_id: {
        value: cdktf.numberToHclTerraform(this._domainId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      group: {
        value: cdktf.stringToHclTerraform(this._group),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
