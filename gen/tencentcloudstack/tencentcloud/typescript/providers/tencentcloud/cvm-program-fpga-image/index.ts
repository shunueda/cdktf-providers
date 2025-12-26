// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cvm_program_fpga_image
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CvmProgramFpgaImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * The DBDF number of the FPGA card on the instance, if left blank, the FPGA image will be burned to all FPGA cards owned by the instance by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cvm_program_fpga_image#dbd_fs CvmProgramFpgaImage#dbd_fs}
  */
  readonly dbdFs?: string[];
  /**
  * Trial run, will not perform the actual burning action, the default is False.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cvm_program_fpga_image#dry_run CvmProgramFpgaImage#dry_run}
  */
  readonly dryRun?: boolean | cdktf.IResolvable;
  /**
  * COS URL address of the FPGA image file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cvm_program_fpga_image#fpga_url CvmProgramFpgaImage#fpga_url}
  */
  readonly fpgaUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cvm_program_fpga_image#id CvmProgramFpgaImage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID information of the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cvm_program_fpga_image#instance_id CvmProgramFpgaImage#instance_id}
  */
  readonly instanceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cvm_program_fpga_image tencentcloud_cvm_program_fpga_image}
*/
export class CvmProgramFpgaImage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cvm_program_fpga_image";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CvmProgramFpgaImage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CvmProgramFpgaImage to import
  * @param importFromId The id of the existing CvmProgramFpgaImage that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cvm_program_fpga_image#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CvmProgramFpgaImage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cvm_program_fpga_image", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/cvm_program_fpga_image tencentcloud_cvm_program_fpga_image} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CvmProgramFpgaImageConfig
  */
  public constructor(scope: Construct, id: string, config: CvmProgramFpgaImageConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cvm_program_fpga_image',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dbdFs = config.dbdFs;
    this._dryRun = config.dryRun;
    this._fpgaUrl = config.fpgaUrl;
    this._id = config.id;
    this._instanceId = config.instanceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dbd_fs - computed: false, optional: true, required: false
  private _dbdFs?: string[]; 
  public get dbdFs() {
    return cdktf.Fn.tolist(this.getListAttribute('dbd_fs'));
  }
  public set dbdFs(value: string[]) {
    this._dbdFs = value;
  }
  public resetDbdFs() {
    this._dbdFs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbdFsInput() {
    return this._dbdFs;
  }

  // dry_run - computed: false, optional: true, required: false
  private _dryRun?: boolean | cdktf.IResolvable; 
  public get dryRun() {
    return this.getBooleanAttribute('dry_run');
  }
  public set dryRun(value: boolean | cdktf.IResolvable) {
    this._dryRun = value;
  }
  public resetDryRun() {
    this._dryRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dryRunInput() {
    return this._dryRun;
  }

  // fpga_url - computed: false, optional: false, required: true
  private _fpgaUrl?: string; 
  public get fpgaUrl() {
    return this.getStringAttribute('fpga_url');
  }
  public set fpgaUrl(value: string) {
    this._fpgaUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fpgaUrlInput() {
    return this._fpgaUrl;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dbd_fs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dbdFs),
      dry_run: cdktf.booleanToTerraform(this._dryRun),
      fpga_url: cdktf.stringToTerraform(this._fpgaUrl),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dbd_fs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dbdFs),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dry_run: {
        value: cdktf.booleanToHclTerraform(this._dryRun),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fpga_url: {
        value: cdktf.stringToHclTerraform(this._fpgaUrl),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
