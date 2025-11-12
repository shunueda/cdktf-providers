// generated from terraform resource schema

import { VisibilityPacketCaptureGlobalTemplatesActivateA, 
visibilityPacketCaptureGlobalTemplatesActivateAToTerraform, 
visibilityPacketCaptureGlobalTemplatesActivateAToHclTerraform, 
VisibilityPacketCaptureGlobalTemplatesActivateAOutputReference, 
VisibilityPacketCaptureGlobalTemplatesTemplateListStructA, 
visibilityPacketCaptureGlobalTemplatesTemplateListStructAToTerraform, 
visibilityPacketCaptureGlobalTemplatesTemplateListStructAToHclTerraform, 
VisibilityPacketCaptureGlobalTemplatesTemplateListStructAList} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VisibilityPacketCaptureGlobalTemplatesAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates#id VisibilityPacketCaptureGlobalTemplatesA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates#uuid VisibilityPacketCaptureGlobalTemplatesA#uuid}
  */
  readonly uuid?: string;
  /**
  * activate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates#activate VisibilityPacketCaptureGlobalTemplatesA#activate}
  */
  readonly activate?: VisibilityPacketCaptureGlobalTemplatesActivateA;
  /**
  * template_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates#template_list VisibilityPacketCaptureGlobalTemplatesA#template_list}
  */
  readonly templateList?: VisibilityPacketCaptureGlobalTemplatesTemplateListStructA[] | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates thunder_visibility_packet_capture_global_templates}
*/
export class VisibilityPacketCaptureGlobalTemplatesA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates thunder_visibility_packet_capture_global_templates} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._uuid = config.uuid;
    this._activate.internalValue = config.activate;
    this._templateList.internalValue = config.templateList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // activate - computed: false, optional: true, required: false
  private _activate = new VisibilityPacketCaptureGlobalTemplatesActivateAOutputReference(this, "activate");
  public get activate() {
    return this._activate;
  }
  public putActivate(value: VisibilityPacketCaptureGlobalTemplatesActivateA) {
    this._activate.internalValue = value;
  }
  public resetActivate() {
    this._activate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activateInput() {
    return this._activate.internalValue;
  }

  // template_list - computed: false, optional: true, required: false
  private _templateList = new VisibilityPacketCaptureGlobalTemplatesTemplateListStructAList(this, "template_list", false);
  public get templateList() {
    return this._templateList;
  }
  public putTemplateList(value: VisibilityPacketCaptureGlobalTemplatesTemplateListStructA[] | cdktf.IResolvable) {
    this._templateList.internalValue = value;
  }
  public resetTemplateList() {
    this._templateList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateListInput() {
    return this._templateList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      activate: visibilityPacketCaptureGlobalTemplatesActivateAToTerraform(this._activate.internalValue),
      template_list: cdktf.listMapper(visibilityPacketCaptureGlobalTemplatesTemplateListStructAToTerraform, true)(this._templateList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      activate: {
        value: visibilityPacketCaptureGlobalTemplatesActivateAToHclTerraform(this._activate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesActivateAList",
      },
      template_list: {
        value: cdktf.listMapperHcl(visibilityPacketCaptureGlobalTemplatesTemplateListStructAToHclTerraform, true)(this._templateList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateListStructAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
