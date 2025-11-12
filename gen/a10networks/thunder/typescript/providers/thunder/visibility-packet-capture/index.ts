// generated from terraform resource schema

import { VisibilityPacketCaptureAutomatedCapturesA, 
visibilityPacketCaptureAutomatedCapturesAToTerraform, 
visibilityPacketCaptureAutomatedCapturesAToHclTerraform, 
VisibilityPacketCaptureAutomatedCapturesAOutputReference, 
VisibilityPacketCaptureCaptureConfigListStructA, 
visibilityPacketCaptureCaptureConfigListStructAToTerraform, 
visibilityPacketCaptureCaptureConfigListStructAToHclTerraform, 
VisibilityPacketCaptureCaptureConfigListStructAList, 
VisibilityPacketCaptureDeletePacketCaptureFileA, 
visibilityPacketCaptureDeletePacketCaptureFileAToTerraform, 
visibilityPacketCaptureDeletePacketCaptureFileAToHclTerraform, 
VisibilityPacketCaptureDeletePacketCaptureFileAOutputReference, 
VisibilityPacketCaptureGlobalTemplatesA, 
visibilityPacketCaptureGlobalTemplatesAToTerraform, 
visibilityPacketCaptureGlobalTemplatesAToHclTerraform, 
VisibilityPacketCaptureGlobalTemplatesAOutputReference, 
VisibilityPacketCaptureObjectTemplatesA, 
visibilityPacketCaptureObjectTemplatesAToTerraform, 
visibilityPacketCaptureObjectTemplatesAToHclTerraform, 
VisibilityPacketCaptureObjectTemplatesAOutputReference} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VisibilityPacketCaptureAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture#id VisibilityPacketCaptureA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture#uuid VisibilityPacketCaptureA#uuid}
  */
  readonly uuid?: string;
  /**
  * automated_captures block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture#automated_captures VisibilityPacketCaptureA#automated_captures}
  */
  readonly automatedCaptures?: VisibilityPacketCaptureAutomatedCapturesA;
  /**
  * capture_config_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture#capture_config_list VisibilityPacketCaptureA#capture_config_list}
  */
  readonly captureConfigList?: VisibilityPacketCaptureCaptureConfigListStructA[] | cdktf.IResolvable;
  /**
  * delete_packet_capture_file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture#delete_packet_capture_file VisibilityPacketCaptureA#delete_packet_capture_file}
  */
  readonly deletePacketCaptureFile?: VisibilityPacketCaptureDeletePacketCaptureFileA;
  /**
  * global_templates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture#global_templates VisibilityPacketCaptureA#global_templates}
  */
  readonly globalTemplates?: VisibilityPacketCaptureGlobalTemplatesA;
  /**
  * object_templates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture#object_templates VisibilityPacketCaptureA#object_templates}
  */
  readonly objectTemplates?: VisibilityPacketCaptureObjectTemplatesA;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture thunder_visibility_packet_capture}
*/
export class VisibilityPacketCaptureA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture thunder_visibility_packet_capture} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture',
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
    this._automatedCaptures.internalValue = config.automatedCaptures;
    this._captureConfigList.internalValue = config.captureConfigList;
    this._deletePacketCaptureFile.internalValue = config.deletePacketCaptureFile;
    this._globalTemplates.internalValue = config.globalTemplates;
    this._objectTemplates.internalValue = config.objectTemplates;
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

  // automated_captures - computed: false, optional: true, required: false
  private _automatedCaptures = new VisibilityPacketCaptureAutomatedCapturesAOutputReference(this, "automated_captures");
  public get automatedCaptures() {
    return this._automatedCaptures;
  }
  public putAutomatedCaptures(value: VisibilityPacketCaptureAutomatedCapturesA) {
    this._automatedCaptures.internalValue = value;
  }
  public resetAutomatedCaptures() {
    this._automatedCaptures.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automatedCapturesInput() {
    return this._automatedCaptures.internalValue;
  }

  // capture_config_list - computed: false, optional: true, required: false
  private _captureConfigList = new VisibilityPacketCaptureCaptureConfigListStructAList(this, "capture_config_list", false);
  public get captureConfigList() {
    return this._captureConfigList;
  }
  public putCaptureConfigList(value: VisibilityPacketCaptureCaptureConfigListStructA[] | cdktf.IResolvable) {
    this._captureConfigList.internalValue = value;
  }
  public resetCaptureConfigList() {
    this._captureConfigList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureConfigListInput() {
    return this._captureConfigList.internalValue;
  }

  // delete_packet_capture_file - computed: false, optional: true, required: false
  private _deletePacketCaptureFile = new VisibilityPacketCaptureDeletePacketCaptureFileAOutputReference(this, "delete_packet_capture_file");
  public get deletePacketCaptureFile() {
    return this._deletePacketCaptureFile;
  }
  public putDeletePacketCaptureFile(value: VisibilityPacketCaptureDeletePacketCaptureFileA) {
    this._deletePacketCaptureFile.internalValue = value;
  }
  public resetDeletePacketCaptureFile() {
    this._deletePacketCaptureFile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletePacketCaptureFileInput() {
    return this._deletePacketCaptureFile.internalValue;
  }

  // global_templates - computed: false, optional: true, required: false
  private _globalTemplates = new VisibilityPacketCaptureGlobalTemplatesAOutputReference(this, "global_templates");
  public get globalTemplates() {
    return this._globalTemplates;
  }
  public putGlobalTemplates(value: VisibilityPacketCaptureGlobalTemplatesA) {
    this._globalTemplates.internalValue = value;
  }
  public resetGlobalTemplates() {
    this._globalTemplates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalTemplatesInput() {
    return this._globalTemplates.internalValue;
  }

  // object_templates - computed: false, optional: true, required: false
  private _objectTemplates = new VisibilityPacketCaptureObjectTemplatesAOutputReference(this, "object_templates");
  public get objectTemplates() {
    return this._objectTemplates;
  }
  public putObjectTemplates(value: VisibilityPacketCaptureObjectTemplatesA) {
    this._objectTemplates.internalValue = value;
  }
  public resetObjectTemplates() {
    this._objectTemplates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTemplatesInput() {
    return this._objectTemplates.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      automated_captures: visibilityPacketCaptureAutomatedCapturesAToTerraform(this._automatedCaptures.internalValue),
      capture_config_list: cdktf.listMapper(visibilityPacketCaptureCaptureConfigListStructAToTerraform, true)(this._captureConfigList.internalValue),
      delete_packet_capture_file: visibilityPacketCaptureDeletePacketCaptureFileAToTerraform(this._deletePacketCaptureFile.internalValue),
      global_templates: visibilityPacketCaptureGlobalTemplatesAToTerraform(this._globalTemplates.internalValue),
      object_templates: visibilityPacketCaptureObjectTemplatesAToTerraform(this._objectTemplates.internalValue),
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
      automated_captures: {
        value: visibilityPacketCaptureAutomatedCapturesAToHclTerraform(this._automatedCaptures.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureAutomatedCapturesAList",
      },
      capture_config_list: {
        value: cdktf.listMapperHcl(visibilityPacketCaptureCaptureConfigListStructAToHclTerraform, true)(this._captureConfigList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureCaptureConfigListStructAList",
      },
      delete_packet_capture_file: {
        value: visibilityPacketCaptureDeletePacketCaptureFileAToHclTerraform(this._deletePacketCaptureFile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureDeletePacketCaptureFileAList",
      },
      global_templates: {
        value: visibilityPacketCaptureGlobalTemplatesAToHclTerraform(this._globalTemplates.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesAList",
      },
      object_templates: {
        value: visibilityPacketCaptureObjectTemplatesAToHclTerraform(this._objectTemplates.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureObjectTemplatesAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
