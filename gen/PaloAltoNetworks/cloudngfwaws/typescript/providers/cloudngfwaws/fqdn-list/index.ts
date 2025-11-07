// https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/fqdn_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FqdnListConfig extends cdktf.TerraformMetaArguments {
  /**
  * The audit comment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/fqdn_list#audit_comment FqdnList#audit_comment}
  */
  readonly auditComment?: string;
  /**
  * The description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/fqdn_list#description FqdnList#description}
  */
  readonly description?: string;
  /**
  * The fqdn list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/fqdn_list#fqdn_list FqdnList#fqdn_list}
  */
  readonly fqdnList: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/fqdn_list#id FqdnList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/fqdn_list#name FqdnList#name}
  */
  readonly name: string;
  /**
  * The rulestack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/fqdn_list#rulestack FqdnList#rulestack}
  */
  readonly rulestack: string;
  /**
  * The rulestack's scope. A local rulestack will require that you've retrieved a LRA JWT. A global rulestack will require that you've retrieved a GRA JWT. Valid values are `Local` or `Global`. Defaults to `Local`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/fqdn_list#scope FqdnList#scope}
  */
  readonly scope?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/fqdn_list cloudngfwaws_fqdn_list}
*/
export class FqdnList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudngfwaws_fqdn_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FqdnList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FqdnList to import
  * @param importFromId The id of the existing FqdnList that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/fqdn_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FqdnList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudngfwaws_fqdn_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/fqdn_list cloudngfwaws_fqdn_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FqdnListConfig
  */
  public constructor(scope: Construct, id: string, config: FqdnListConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudngfwaws_fqdn_list',
      terraformGeneratorMetadata: {
        providerName: 'cloudngfwaws',
        providerVersion: '3.0.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._auditComment = config.auditComment;
    this._description = config.description;
    this._fqdnList = config.fqdnList;
    this._id = config.id;
    this._name = config.name;
    this._rulestack = config.rulestack;
    this._scope = config.scope;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audit_comment - computed: false, optional: true, required: false
  private _auditComment?: string; 
  public get auditComment() {
    return this.getStringAttribute('audit_comment');
  }
  public set auditComment(value: string) {
    this._auditComment = value;
  }
  public resetAuditComment() {
    this._auditComment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditCommentInput() {
    return this._auditComment;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // fqdn_list - computed: false, optional: false, required: true
  private _fqdnList?: string[]; 
  public get fqdnList() {
    return cdktf.Fn.tolist(this.getListAttribute('fqdn_list'));
  }
  public set fqdnList(value: string[]) {
    this._fqdnList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnListInput() {
    return this._fqdnList;
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

  // rulestack - computed: false, optional: false, required: true
  private _rulestack?: string; 
  public get rulestack() {
    return this.getStringAttribute('rulestack');
  }
  public set rulestack(value: string) {
    this._rulestack = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulestackInput() {
    return this._rulestack;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // update_token - computed: true, optional: false, required: false
  public get updateToken() {
    return this.getStringAttribute('update_token');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      audit_comment: cdktf.stringToTerraform(this._auditComment),
      description: cdktf.stringToTerraform(this._description),
      fqdn_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fqdnList),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      rulestack: cdktf.stringToTerraform(this._rulestack),
      scope: cdktf.stringToTerraform(this._scope),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      audit_comment: {
        value: cdktf.stringToHclTerraform(this._auditComment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fqdn_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fqdnList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      rulestack: {
        value: cdktf.stringToHclTerraform(this._rulestack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
