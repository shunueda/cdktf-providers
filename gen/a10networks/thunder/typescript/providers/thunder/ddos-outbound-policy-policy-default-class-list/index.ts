// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_outbound_policy_policy_default_class_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosOutboundPolicyPolicyDefaultClassListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Global limit ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_outbound_policy_policy_default_class_list#class_list_glid DdosOutboundPolicyPolicyDefaultClassList#class_list_glid}
  */
  readonly classListGlid?: string;
  /**
  * Default class-list configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_outbound_policy_policy_default_class_list#configuration DdosOutboundPolicyPolicyDefaultClassList#configuration}
  */
  readonly configuration: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_outbound_policy_policy_default_class_list#id DdosOutboundPolicyPolicyDefaultClassList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Outbound_policy_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_outbound_policy_policy_default_class_list#outbound_policy_name DdosOutboundPolicyPolicyDefaultClassList#outbound_policy_name}
  */
  readonly outboundPolicyName: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_outbound_policy_policy_default_class_list#uuid DdosOutboundPolicyPolicyDefaultClassList#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_outbound_policy_policy_default_class_list thunder_ddos_outbound_policy_policy_default_class_list}
*/
export class DdosOutboundPolicyPolicyDefaultClassList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_outbound_policy_policy_default_class_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosOutboundPolicyPolicyDefaultClassList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosOutboundPolicyPolicyDefaultClassList to import
  * @param importFromId The id of the existing DdosOutboundPolicyPolicyDefaultClassList that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_outbound_policy_policy_default_class_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosOutboundPolicyPolicyDefaultClassList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_outbound_policy_policy_default_class_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_outbound_policy_policy_default_class_list thunder_ddos_outbound_policy_policy_default_class_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosOutboundPolicyPolicyDefaultClassListConfig
  */
  public constructor(scope: Construct, id: string, config: DdosOutboundPolicyPolicyDefaultClassListConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_outbound_policy_policy_default_class_list',
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
    this._classListGlid = config.classListGlid;
    this._configuration = config.configuration;
    this._id = config.id;
    this._outboundPolicyName = config.outboundPolicyName;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // class_list_glid - computed: false, optional: true, required: false
  private _classListGlid?: string; 
  public get classListGlid() {
    return this.getStringAttribute('class_list_glid');
  }
  public set classListGlid(value: string) {
    this._classListGlid = value;
  }
  public resetClassListGlid() {
    this._classListGlid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListGlidInput() {
    return this._classListGlid;
  }

  // configuration - computed: false, optional: false, required: true
  private _configuration?: number; 
  public get configuration() {
    return this.getNumberAttribute('configuration');
  }
  public set configuration(value: number) {
    this._configuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
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

  // outbound_policy_name - computed: false, optional: false, required: true
  private _outboundPolicyName?: string; 
  public get outboundPolicyName() {
    return this.getStringAttribute('outbound_policy_name');
  }
  public set outboundPolicyName(value: string) {
    this._outboundPolicyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundPolicyNameInput() {
    return this._outboundPolicyName;
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
      class_list_glid: cdktf.stringToTerraform(this._classListGlid),
      configuration: cdktf.numberToTerraform(this._configuration),
      id: cdktf.stringToTerraform(this._id),
      outbound_policy_name: cdktf.stringToTerraform(this._outboundPolicyName),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      class_list_glid: {
        value: cdktf.stringToHclTerraform(this._classListGlid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration: {
        value: cdktf.numberToHclTerraform(this._configuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      outbound_policy_name: {
        value: cdktf.stringToHclTerraform(this._outboundPolicyName),
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
