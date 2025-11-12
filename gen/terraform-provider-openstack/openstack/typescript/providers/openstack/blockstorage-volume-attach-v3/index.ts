// https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/blockstorage_volume_attach_v3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BlockstorageVolumeAttachV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/blockstorage_volume_attach_v3#attach_mode BlockstorageVolumeAttachV3#attach_mode}
  */
  readonly attachMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/blockstorage_volume_attach_v3#device BlockstorageVolumeAttachV3#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/blockstorage_volume_attach_v3#host_name BlockstorageVolumeAttachV3#host_name}
  */
  readonly hostName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/blockstorage_volume_attach_v3#id BlockstorageVolumeAttachV3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/blockstorage_volume_attach_v3#initiator BlockstorageVolumeAttachV3#initiator}
  */
  readonly initiator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/blockstorage_volume_attach_v3#ip_address BlockstorageVolumeAttachV3#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/blockstorage_volume_attach_v3#multipath BlockstorageVolumeAttachV3#multipath}
  */
  readonly multipath?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/blockstorage_volume_attach_v3#os_type BlockstorageVolumeAttachV3#os_type}
  */
  readonly osType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/blockstorage_volume_attach_v3#platform BlockstorageVolumeAttachV3#platform}
  */
  readonly platform?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/blockstorage_volume_attach_v3#region BlockstorageVolumeAttachV3#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/blockstorage_volume_attach_v3#volume_id BlockstorageVolumeAttachV3#volume_id}
  */
  readonly volumeId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/blockstorage_volume_attach_v3#wwnn BlockstorageVolumeAttachV3#wwnn}
  */
  readonly wwnn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/blockstorage_volume_attach_v3#wwpn BlockstorageVolumeAttachV3#wwpn}
  */
  readonly wwpn?: string[];
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/blockstorage_volume_attach_v3#timeouts BlockstorageVolumeAttachV3#timeouts}
  */
  readonly timeouts?: BlockstorageVolumeAttachV3Timeouts;
}
export interface BlockstorageVolumeAttachV3Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/blockstorage_volume_attach_v3#create BlockstorageVolumeAttachV3#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/blockstorage_volume_attach_v3#delete BlockstorageVolumeAttachV3#delete}
  */
  readonly delete?: string;
}

export function blockstorageVolumeAttachV3TimeoutsToTerraform(struct?: BlockstorageVolumeAttachV3Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function blockstorageVolumeAttachV3TimeoutsToHclTerraform(struct?: BlockstorageVolumeAttachV3Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BlockstorageVolumeAttachV3TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BlockstorageVolumeAttachV3Timeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BlockstorageVolumeAttachV3Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/blockstorage_volume_attach_v3 openstack_blockstorage_volume_attach_v3}
*/
export class BlockstorageVolumeAttachV3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openstack_blockstorage_volume_attach_v3";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BlockstorageVolumeAttachV3 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BlockstorageVolumeAttachV3 to import
  * @param importFromId The id of the existing BlockstorageVolumeAttachV3 that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/blockstorage_volume_attach_v3#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BlockstorageVolumeAttachV3 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openstack_blockstorage_volume_attach_v3", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/blockstorage_volume_attach_v3 openstack_blockstorage_volume_attach_v3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BlockstorageVolumeAttachV3Config
  */
  public constructor(scope: Construct, id: string, config: BlockstorageVolumeAttachV3Config) {
    super(scope, id, {
      terraformResourceType: 'openstack_blockstorage_volume_attach_v3',
      terraformGeneratorMetadata: {
        providerName: 'openstack',
        providerVersion: '3.4.0',
        providerVersionConstraint: '3.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attachMode = config.attachMode;
    this._device = config.device;
    this._hostName = config.hostName;
    this._id = config.id;
    this._initiator = config.initiator;
    this._ipAddress = config.ipAddress;
    this._multipath = config.multipath;
    this._osType = config.osType;
    this._platform = config.platform;
    this._region = config.region;
    this._volumeId = config.volumeId;
    this._wwnn = config.wwnn;
    this._wwpn = config.wwpn;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attach_mode - computed: false, optional: true, required: false
  private _attachMode?: string; 
  public get attachMode() {
    return this.getStringAttribute('attach_mode');
  }
  public set attachMode(value: string) {
    this._attachMode = value;
  }
  public resetAttachMode() {
    this._attachMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachModeInput() {
    return this._attachMode;
  }

  // data - computed: true, optional: false, required: false
  private _data = new cdktf.StringMap(this, "data");
  public get data() {
    return this._data;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // driver_volume_type - computed: true, optional: false, required: false
  public get driverVolumeType() {
    return this.getStringAttribute('driver_volume_type');
  }

  // host_name - computed: false, optional: false, required: true
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
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

  // initiator - computed: false, optional: true, required: false
  private _initiator?: string; 
  public get initiator() {
    return this.getStringAttribute('initiator');
  }
  public set initiator(value: string) {
    this._initiator = value;
  }
  public resetInitiator() {
    this._initiator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initiatorInput() {
    return this._initiator;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // mount_point_base - computed: true, optional: false, required: false
  public get mountPointBase() {
    return this.getStringAttribute('mount_point_base');
  }

  // multipath - computed: false, optional: true, required: false
  private _multipath?: boolean | cdktf.IResolvable; 
  public get multipath() {
    return this.getBooleanAttribute('multipath');
  }
  public set multipath(value: boolean | cdktf.IResolvable) {
    this._multipath = value;
  }
  public resetMultipath() {
    this._multipath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipathInput() {
    return this._multipath;
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

  // platform - computed: false, optional: true, required: false
  private _platform?: string; 
  public get platform() {
    return this.getStringAttribute('platform');
  }
  public set platform(value: string) {
    this._platform = value;
  }
  public resetPlatform() {
    this._platform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // volume_id - computed: false, optional: false, required: true
  private _volumeId?: string; 
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
  public set volumeId(value: string) {
    this._volumeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }

  // wwnn - computed: false, optional: true, required: false
  private _wwnn?: string; 
  public get wwnn() {
    return this.getStringAttribute('wwnn');
  }
  public set wwnn(value: string) {
    this._wwnn = value;
  }
  public resetWwnn() {
    this._wwnn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wwnnInput() {
    return this._wwnn;
  }

  // wwpn - computed: false, optional: true, required: false
  private _wwpn?: string[]; 
  public get wwpn() {
    return this.getListAttribute('wwpn');
  }
  public set wwpn(value: string[]) {
    this._wwpn = value;
  }
  public resetWwpn() {
    this._wwpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wwpnInput() {
    return this._wwpn;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BlockstorageVolumeAttachV3TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BlockstorageVolumeAttachV3Timeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attach_mode: cdktf.stringToTerraform(this._attachMode),
      device: cdktf.stringToTerraform(this._device),
      host_name: cdktf.stringToTerraform(this._hostName),
      id: cdktf.stringToTerraform(this._id),
      initiator: cdktf.stringToTerraform(this._initiator),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      multipath: cdktf.booleanToTerraform(this._multipath),
      os_type: cdktf.stringToTerraform(this._osType),
      platform: cdktf.stringToTerraform(this._platform),
      region: cdktf.stringToTerraform(this._region),
      volume_id: cdktf.stringToTerraform(this._volumeId),
      wwnn: cdktf.stringToTerraform(this._wwnn),
      wwpn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._wwpn),
      timeouts: blockstorageVolumeAttachV3TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attach_mode: {
        value: cdktf.stringToHclTerraform(this._attachMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_name: {
        value: cdktf.stringToHclTerraform(this._hostName),
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
      initiator: {
        value: cdktf.stringToHclTerraform(this._initiator),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_address: {
        value: cdktf.stringToHclTerraform(this._ipAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multipath: {
        value: cdktf.booleanToHclTerraform(this._multipath),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      os_type: {
        value: cdktf.stringToHclTerraform(this._osType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      platform: {
        value: cdktf.stringToHclTerraform(this._platform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      volume_id: {
        value: cdktf.stringToHclTerraform(this._volumeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wwnn: {
        value: cdktf.stringToHclTerraform(this._wwnn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wwpn: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._wwpn),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      timeouts: {
        value: blockstorageVolumeAttachV3TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BlockstorageVolumeAttachV3Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
