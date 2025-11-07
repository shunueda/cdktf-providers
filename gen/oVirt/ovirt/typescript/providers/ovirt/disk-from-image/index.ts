// https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/disk_from_image
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DiskFromImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Human-readable alias for the disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/disk_from_image#alias DiskFromImage#alias}
  */
  readonly alias?: string;
  /**
  * Format for the disk. One of: `cow`, `raw`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/disk_from_image#format DiskFromImage#format}
  */
  readonly format: string;
  /**
  * Path to the local file to upload as the disk image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/disk_from_image#source_file DiskFromImage#source_file}
  */
  readonly sourceFile: string;
  /**
  * Use sparse provisioning for disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/disk_from_image#sparse DiskFromImage#sparse}
  */
  readonly sparse?: boolean | cdktf.IResolvable;
  /**
  * ID of the storage domain to use for disk creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/disk_from_image#storage_domain_id DiskFromImage#storage_domain_id}
  */
  readonly storageDomainId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/disk_from_image ovirt_disk_from_image}
*/
export class DiskFromImage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovirt_disk_from_image";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DiskFromImage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DiskFromImage to import
  * @param importFromId The id of the existing DiskFromImage that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/disk_from_image#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DiskFromImage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovirt_disk_from_image", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/disk_from_image ovirt_disk_from_image} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DiskFromImageConfig
  */
  public constructor(scope: Construct, id: string, config: DiskFromImageConfig) {
    super(scope, id, {
      terraformResourceType: 'ovirt_disk_from_image',
      terraformGeneratorMetadata: {
        providerName: 'ovirt',
        providerVersion: '2.1.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alias = config.alias;
    this._format = config.format;
    this._sourceFile = config.sourceFile;
    this._sparse = config.sparse;
    this._storageDomainId = config.storageDomainId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // source_file - computed: false, optional: false, required: true
  private _sourceFile?: string; 
  public get sourceFile() {
    return this.getStringAttribute('source_file');
  }
  public set sourceFile(value: string) {
    this._sourceFile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFileInput() {
    return this._sourceFile;
  }

  // sparse - computed: false, optional: true, required: false
  private _sparse?: boolean | cdktf.IResolvable; 
  public get sparse() {
    return this.getBooleanAttribute('sparse');
  }
  public set sparse(value: boolean | cdktf.IResolvable) {
    this._sparse = value;
  }
  public resetSparse() {
    this._sparse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparseInput() {
    return this._sparse;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // storage_domain_id - computed: false, optional: false, required: true
  private _storageDomainId?: string; 
  public get storageDomainId() {
    return this.getStringAttribute('storage_domain_id');
  }
  public set storageDomainId(value: string) {
    this._storageDomainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageDomainIdInput() {
    return this._storageDomainId;
  }

  // total_size - computed: true, optional: false, required: false
  public get totalSize() {
    return this.getNumberAttribute('total_size');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias: cdktf.stringToTerraform(this._alias),
      format: cdktf.stringToTerraform(this._format),
      source_file: cdktf.stringToTerraform(this._sourceFile),
      sparse: cdktf.booleanToTerraform(this._sparse),
      storage_domain_id: cdktf.stringToTerraform(this._storageDomainId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      format: {
        value: cdktf.stringToHclTerraform(this._format),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_file: {
        value: cdktf.stringToHclTerraform(this._sourceFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sparse: {
        value: cdktf.booleanToHclTerraform(this._sparse),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      storage_domain_id: {
        value: cdktf.stringToHclTerraform(this._storageDomainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
