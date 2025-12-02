// https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/data-sources/image
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataStackitImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * The image ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/data-sources/image#image_id DataStackitImage#image_id}
  */
  readonly imageId: string;
  /**
  * STACKIT project ID to which the image is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/data-sources/image#project_id DataStackitImage#project_id}
  */
  readonly projectId: string;
}
export interface DataStackitImageChecksum {
}

export function dataStackitImageChecksumToTerraform(struct?: DataStackitImageChecksum): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStackitImageChecksumToHclTerraform(struct?: DataStackitImageChecksum): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStackitImageChecksumOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStackitImageChecksum | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStackitImageChecksum | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // digest - computed: true, optional: false, required: false
  public get digest() {
    return this.getStringAttribute('digest');
  }
}
export interface DataStackitImageConfigA {
}

export function dataStackitImageConfigAToTerraform(struct?: DataStackitImageConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStackitImageConfigAToHclTerraform(struct?: DataStackitImageConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStackitImageConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStackitImageConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStackitImageConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // boot_menu - computed: true, optional: false, required: false
  public get bootMenu() {
    return this.getBooleanAttribute('boot_menu');
  }

  // cdrom_bus - computed: true, optional: false, required: false
  public get cdromBus() {
    return this.getStringAttribute('cdrom_bus');
  }

  // disk_bus - computed: true, optional: false, required: false
  public get diskBus() {
    return this.getStringAttribute('disk_bus');
  }

  // nic_model - computed: true, optional: false, required: false
  public get nicModel() {
    return this.getStringAttribute('nic_model');
  }

  // operating_system - computed: true, optional: false, required: false
  public get operatingSystem() {
    return this.getStringAttribute('operating_system');
  }

  // operating_system_distro - computed: true, optional: false, required: false
  public get operatingSystemDistro() {
    return this.getStringAttribute('operating_system_distro');
  }

  // operating_system_version - computed: true, optional: false, required: false
  public get operatingSystemVersion() {
    return this.getStringAttribute('operating_system_version');
  }

  // rescue_bus - computed: true, optional: false, required: false
  public get rescueBus() {
    return this.getStringAttribute('rescue_bus');
  }

  // rescue_device - computed: true, optional: false, required: false
  public get rescueDevice() {
    return this.getStringAttribute('rescue_device');
  }

  // secure_boot - computed: true, optional: false, required: false
  public get secureBoot() {
    return this.getBooleanAttribute('secure_boot');
  }

  // uefi - computed: true, optional: false, required: false
  public get uefi() {
    return this.getBooleanAttribute('uefi');
  }

  // video_model - computed: true, optional: false, required: false
  public get videoModel() {
    return this.getStringAttribute('video_model');
  }

  // virtio_scsi - computed: true, optional: false, required: false
  public get virtioScsi() {
    return this.getBooleanAttribute('virtio_scsi');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/data-sources/image stackit_image}
*/
export class DataStackitImage extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_image";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataStackitImage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataStackitImage to import
  * @param importFromId The id of the existing DataStackitImage that should be imported. Refer to the {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/data-sources/image#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataStackitImage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_image", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/data-sources/image stackit_image} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataStackitImageConfig
  */
  public constructor(scope: Construct, id: string, config: DataStackitImageConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_image',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '0.72.0',
        providerVersionConstraint: '0.72.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._imageId = config.imageId;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // checksum - computed: true, optional: false, required: false
  private _checksum = new DataStackitImageChecksumOutputReference(this, "checksum");
  public get checksum() {
    return this._checksum;
  }

  // config - computed: true, optional: false, required: false
  private _config = new DataStackitImageConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }

  // disk_format - computed: true, optional: false, required: false
  public get diskFormat() {
    return this.getStringAttribute('disk_format');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_id - computed: false, optional: false, required: true
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // min_disk_size - computed: true, optional: false, required: false
  public get minDiskSize() {
    return this.getNumberAttribute('min_disk_size');
  }

  // min_ram - computed: true, optional: false, required: false
  public get minRam() {
    return this.getNumberAttribute('min_ram');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // protected - computed: true, optional: false, required: false
  public get protected() {
    return this.getBooleanAttribute('protected');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      image_id: cdktf.stringToTerraform(this._imageId),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      image_id: {
        value: cdktf.stringToHclTerraform(this._imageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
