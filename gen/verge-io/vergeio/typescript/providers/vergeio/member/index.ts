// https://registry.terraform.io/providers/verge-io/vergeio/2.7.1/docs/resources/member
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MemberConfig extends cdktf.TerraformMetaArguments {
  /**
  * Group id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.1/docs/resources/member#group Member#group}
  */
  readonly group?: number;
  /**
  * Unique member name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.1/docs/resources/member#member Member#member}
  */
  readonly member?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.1/docs/resources/member vergeio_member}
*/
export class Member extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vergeio_member";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Member resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Member to import
  * @param importFromId The id of the existing Member that should be imported. Refer to the {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.1/docs/resources/member#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Member to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vergeio_member", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/verge-io/vergeio/2.7.1/docs/resources/member vergeio_member} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MemberConfig = {}
  */
  public constructor(scope: Construct, id: string, config: MemberConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vergeio_member',
      terraformGeneratorMetadata: {
        providerName: 'vergeio',
        providerVersion: '2.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._group = config.group;
    this._member = config.member;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group - computed: true, optional: true, required: false
  private _group?: number; 
  public get group() {
    return this.getNumberAttribute('group');
  }
  public set group(value: number) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // member - computed: true, optional: true, required: false
  private _member?: string; 
  public get member() {
    return this.getStringAttribute('member');
  }
  public set member(value: string) {
    this._member = value;
  }
  public resetMember() {
    this._member = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInput() {
    return this._member;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group: cdktf.numberToTerraform(this._group),
      member: cdktf.stringToTerraform(this._member),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group: {
        value: cdktf.numberToHclTerraform(this._group),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      member: {
        value: cdktf.stringToHclTerraform(this._member),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
