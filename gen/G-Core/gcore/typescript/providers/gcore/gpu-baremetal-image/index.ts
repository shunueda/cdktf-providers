// https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/gpu_baremetal_image
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GpuBaremetalImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Image architecture type: aarch64, x86_64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/gpu_baremetal_image#architecture GpuBaremetalImage#architecture}
  */
  readonly architecture?: string;
  /**
  * When True, image cannot be deleted unless all volumes, created from it, are deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/gpu_baremetal_image#cow_format GpuBaremetalImage#cow_format}
  */
  readonly cowFormat?: boolean | cdktf.IResolvable;
  /**
  * Specifies the type of firmware with which to boot the guest
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/gpu_baremetal_image#hw_firmware_type GpuBaremetalImage#hw_firmware_type}
  */
  readonly hwFirmwareType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/gpu_baremetal_image#id GpuBaremetalImage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Create one or more metadata items for a cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/gpu_baremetal_image#metadata GpuBaremetalImage#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Image name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/gpu_baremetal_image#name GpuBaremetalImage#name}
  */
  readonly name: string;
  /**
  * OS Distribution, i.e. Debian, CentOS, Ubuntu, CoreOS etc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/gpu_baremetal_image#os_distro GpuBaremetalImage#os_distro}
  */
  readonly osDistro?: string;
  /**
  * The operating system installed on the image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/gpu_baremetal_image#os_type GpuBaremetalImage#os_type}
  */
  readonly osType?: string;
  /**
  * OS version, i.e. 19.04 (for Ubuntu) or 9.4 for Debian
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/gpu_baremetal_image#os_version GpuBaremetalImage#os_version}
  */
  readonly osVersion?: string;
  /**
  * Project ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/gpu_baremetal_image#project_id GpuBaremetalImage#project_id}
  */
  readonly projectId?: number;
  /**
  * Project name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/gpu_baremetal_image#project_name GpuBaremetalImage#project_name}
  */
  readonly projectName?: string;
  /**
  * Region ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/gpu_baremetal_image#region_id GpuBaremetalImage#region_id}
  */
  readonly regionId?: number;
  /**
  * Region name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/gpu_baremetal_image#region_name GpuBaremetalImage#region_name}
  */
  readonly regionName?: string;
  /**
  * Permission to use a ssh key in instances
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/gpu_baremetal_image#ssh_key GpuBaremetalImage#ssh_key}
  */
  readonly sshKey?: string;
  /**
  * Image URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/gpu_baremetal_image#url GpuBaremetalImage#url}
  */
  readonly url: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/gpu_baremetal_image gcore_gpu_baremetal_image}
*/
export class GpuBaremetalImage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gcore_gpu_baremetal_image";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GpuBaremetalImage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GpuBaremetalImage to import
  * @param importFromId The id of the existing GpuBaremetalImage that should be imported. Refer to the {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/gpu_baremetal_image#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GpuBaremetalImage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gcore_gpu_baremetal_image", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/gpu_baremetal_image gcore_gpu_baremetal_image} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GpuBaremetalImageConfig
  */
  public constructor(scope: Construct, id: string, config: GpuBaremetalImageConfig) {
    super(scope, id, {
      terraformResourceType: 'gcore_gpu_baremetal_image',
      terraformGeneratorMetadata: {
        providerName: 'gcore',
        providerVersion: '0.31.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._architecture = config.architecture;
    this._cowFormat = config.cowFormat;
    this._hwFirmwareType = config.hwFirmwareType;
    this._id = config.id;
    this._metadata = config.metadata;
    this._name = config.name;
    this._osDistro = config.osDistro;
    this._osType = config.osType;
    this._osVersion = config.osVersion;
    this._projectId = config.projectId;
    this._projectName = config.projectName;
    this._regionId = config.regionId;
    this._regionName = config.regionName;
    this._sshKey = config.sshKey;
    this._url = config.url;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // architecture - computed: false, optional: true, required: false
  private _architecture?: string; 
  public get architecture() {
    return this.getStringAttribute('architecture');
  }
  public set architecture(value: string) {
    this._architecture = value;
  }
  public resetArchitecture() {
    this._architecture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get architectureInput() {
    return this._architecture;
  }

  // cow_format - computed: false, optional: true, required: false
  private _cowFormat?: boolean | cdktf.IResolvable; 
  public get cowFormat() {
    return this.getBooleanAttribute('cow_format');
  }
  public set cowFormat(value: boolean | cdktf.IResolvable) {
    this._cowFormat = value;
  }
  public resetCowFormat() {
    this._cowFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cowFormatInput() {
    return this._cowFormat;
  }

  // hw_firmware_type - computed: false, optional: true, required: false
  private _hwFirmwareType?: string; 
  public get hwFirmwareType() {
    return this.getStringAttribute('hw_firmware_type');
  }
  public set hwFirmwareType(value: string) {
    this._hwFirmwareType = value;
  }
  public resetHwFirmwareType() {
    this._hwFirmwareType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwFirmwareTypeInput() {
    return this._hwFirmwareType;
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

  // metadata - computed: true, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
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

  // os_distro - computed: false, optional: true, required: false
  private _osDistro?: string; 
  public get osDistro() {
    return this.getStringAttribute('os_distro');
  }
  public set osDistro(value: string) {
    this._osDistro = value;
  }
  public resetOsDistro() {
    this._osDistro = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osDistroInput() {
    return this._osDistro;
  }

  // os_type - computed: false, optional: true, required: false
  private _osType?: string; 
  public get osType() {
    return this.getStringAttribute('os_type');
  }
  public set osType(value: string) {
    this._osType = value;
  }
  public resetOsType() {
    this._osType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osTypeInput() {
    return this._osType;
  }

  // os_version - computed: false, optional: true, required: false
  private _osVersion?: string; 
  public get osVersion() {
    return this.getStringAttribute('os_version');
  }
  public set osVersion(value: string) {
    this._osVersion = value;
  }
  public resetOsVersion() {
    this._osVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osVersionInput() {
    return this._osVersion;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // project_name - computed: false, optional: true, required: false
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  public resetProjectName() {
    this._projectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // region_id - computed: false, optional: true, required: false
  private _regionId?: number; 
  public get regionId() {
    return this.getNumberAttribute('region_id');
  }
  public set regionId(value: number) {
    this._regionId = value;
  }
  public resetRegionId() {
    this._regionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // region_name - computed: false, optional: true, required: false
  private _regionName?: string; 
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
  public set regionName(value: string) {
    this._regionName = value;
  }
  public resetRegionName() {
    this._regionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNameInput() {
    return this._regionName;
  }

  // ssh_key - computed: false, optional: true, required: false
  private _sshKey?: string; 
  public get sshKey() {
    return this.getStringAttribute('ssh_key');
  }
  public set sshKey(value: string) {
    this._sshKey = value;
  }
  public resetSshKey() {
    this._sshKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyInput() {
    return this._sshKey;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      architecture: cdktf.stringToTerraform(this._architecture),
      cow_format: cdktf.booleanToTerraform(this._cowFormat),
      hw_firmware_type: cdktf.stringToTerraform(this._hwFirmwareType),
      id: cdktf.stringToTerraform(this._id),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      os_distro: cdktf.stringToTerraform(this._osDistro),
      os_type: cdktf.stringToTerraform(this._osType),
      os_version: cdktf.stringToTerraform(this._osVersion),
      project_id: cdktf.numberToTerraform(this._projectId),
      project_name: cdktf.stringToTerraform(this._projectName),
      region_id: cdktf.numberToTerraform(this._regionId),
      region_name: cdktf.stringToTerraform(this._regionName),
      ssh_key: cdktf.stringToTerraform(this._sshKey),
      url: cdktf.stringToTerraform(this._url),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      architecture: {
        value: cdktf.stringToHclTerraform(this._architecture),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cow_format: {
        value: cdktf.booleanToHclTerraform(this._cowFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hw_firmware_type: {
        value: cdktf.stringToHclTerraform(this._hwFirmwareType),
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
      metadata: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_distro: {
        value: cdktf.stringToHclTerraform(this._osDistro),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_type: {
        value: cdktf.stringToHclTerraform(this._osType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_version: {
        value: cdktf.stringToHclTerraform(this._osVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_id: {
        value: cdktf.numberToHclTerraform(this._regionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region_name: {
        value: cdktf.stringToHclTerraform(this._regionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_key: {
        value: cdktf.stringToHclTerraform(this._sshKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
