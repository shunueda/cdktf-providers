// https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nas_volume
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NasVolumeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nas_volume#cifs_user_name NasVolume#cifs_user_name}
  */
  readonly cifsUserName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nas_volume#cifs_user_password NasVolume#cifs_user_password}
  */
  readonly cifsUserPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nas_volume#description NasVolume#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nas_volume#id NasVolume#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nas_volume#is_encrypted_volume NasVolume#is_encrypted_volume}
  */
  readonly isEncryptedVolume?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nas_volume#is_return_protection NasVolume#is_return_protection}
  */
  readonly isReturnProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nas_volume#server_instance_no_list NasVolume#server_instance_no_list}
  */
  readonly serverInstanceNoList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nas_volume#volume_allotment_protocol_type NasVolume#volume_allotment_protocol_type}
  */
  readonly volumeAllotmentProtocolType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nas_volume#volume_name_postfix NasVolume#volume_name_postfix}
  */
  readonly volumeNamePostfix: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nas_volume#volume_size NasVolume#volume_size}
  */
  readonly volumeSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nas_volume#zone NasVolume#zone}
  */
  readonly zone?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nas_volume#timeouts NasVolume#timeouts}
  */
  readonly timeouts?: NasVolumeTimeouts;
}
export interface NasVolumeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nas_volume#create NasVolume#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nas_volume#delete NasVolume#delete}
  */
  readonly delete?: string;
}

export function nasVolumeTimeoutsToTerraform(struct?: NasVolumeTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function nasVolumeTimeoutsToHclTerraform(struct?: NasVolumeTimeouts | cdktf.IResolvable): any {
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

export class NasVolumeTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NasVolumeTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NasVolumeTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nas_volume ncloud_nas_volume}
*/
export class NasVolume extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ncloud_nas_volume";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NasVolume resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NasVolume to import
  * @param importFromId The id of the existing NasVolume that should be imported. Refer to the {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nas_volume#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NasVolume to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ncloud_nas_volume", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nas_volume ncloud_nas_volume} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NasVolumeConfig
  */
  public constructor(scope: Construct, id: string, config: NasVolumeConfig) {
    super(scope, id, {
      terraformResourceType: 'ncloud_nas_volume',
      terraformGeneratorMetadata: {
        providerName: 'ncloud',
        providerVersion: '4.0.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cifsUserName = config.cifsUserName;
    this._cifsUserPassword = config.cifsUserPassword;
    this._description = config.description;
    this._id = config.id;
    this._isEncryptedVolume = config.isEncryptedVolume;
    this._isReturnProtection = config.isReturnProtection;
    this._serverInstanceNoList = config.serverInstanceNoList;
    this._volumeAllotmentProtocolType = config.volumeAllotmentProtocolType;
    this._volumeNamePostfix = config.volumeNamePostfix;
    this._volumeSize = config.volumeSize;
    this._zone = config.zone;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cifs_user_name - computed: false, optional: true, required: false
  private _cifsUserName?: string; 
  public get cifsUserName() {
    return this.getStringAttribute('cifs_user_name');
  }
  public set cifsUserName(value: string) {
    this._cifsUserName = value;
  }
  public resetCifsUserName() {
    this._cifsUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cifsUserNameInput() {
    return this._cifsUserName;
  }

  // cifs_user_password - computed: false, optional: true, required: false
  private _cifsUserPassword?: string; 
  public get cifsUserPassword() {
    return this.getStringAttribute('cifs_user_password');
  }
  public set cifsUserPassword(value: string) {
    this._cifsUserPassword = value;
  }
  public resetCifsUserPassword() {
    this._cifsUserPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cifsUserPasswordInput() {
    return this._cifsUserPassword;
  }

  // description - computed: true, optional: true, required: false
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

  // is_encrypted_volume - computed: true, optional: true, required: false
  private _isEncryptedVolume?: boolean | cdktf.IResolvable; 
  public get isEncryptedVolume() {
    return this.getBooleanAttribute('is_encrypted_volume');
  }
  public set isEncryptedVolume(value: boolean | cdktf.IResolvable) {
    this._isEncryptedVolume = value;
  }
  public resetIsEncryptedVolume() {
    this._isEncryptedVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEncryptedVolumeInput() {
    return this._isEncryptedVolume;
  }

  // is_event_configuration - computed: true, optional: false, required: false
  public get isEventConfiguration() {
    return this.getBooleanAttribute('is_event_configuration');
  }

  // is_return_protection - computed: true, optional: true, required: false
  private _isReturnProtection?: boolean | cdktf.IResolvable; 
  public get isReturnProtection() {
    return this.getBooleanAttribute('is_return_protection');
  }
  public set isReturnProtection(value: boolean | cdktf.IResolvable) {
    this._isReturnProtection = value;
  }
  public resetIsReturnProtection() {
    this._isReturnProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isReturnProtectionInput() {
    return this._isReturnProtection;
  }

  // is_snapshot_configuration - computed: true, optional: false, required: false
  public get isSnapshotConfiguration() {
    return this.getBooleanAttribute('is_snapshot_configuration');
  }

  // mount_information - computed: true, optional: false, required: false
  public get mountInformation() {
    return this.getStringAttribute('mount_information');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // nas_volume_no - computed: true, optional: false, required: false
  public get nasVolumeNo() {
    return this.getStringAttribute('nas_volume_no');
  }

  // server_instance_no_list - computed: true, optional: true, required: false
  private _serverInstanceNoList?: string[]; 
  public get serverInstanceNoList() {
    return this.getListAttribute('server_instance_no_list');
  }
  public set serverInstanceNoList(value: string[]) {
    this._serverInstanceNoList = value;
  }
  public resetServerInstanceNoList() {
    this._serverInstanceNoList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInstanceNoListInput() {
    return this._serverInstanceNoList;
  }

  // snapshot_volume_size - computed: true, optional: false, required: false
  public get snapshotVolumeSize() {
    return this.getNumberAttribute('snapshot_volume_size');
  }

  // volume_allotment_protocol_type - computed: false, optional: false, required: true
  private _volumeAllotmentProtocolType?: string; 
  public get volumeAllotmentProtocolType() {
    return this.getStringAttribute('volume_allotment_protocol_type');
  }
  public set volumeAllotmentProtocolType(value: string) {
    this._volumeAllotmentProtocolType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeAllotmentProtocolTypeInput() {
    return this._volumeAllotmentProtocolType;
  }

  // volume_name_postfix - computed: false, optional: false, required: true
  private _volumeNamePostfix?: string; 
  public get volumeNamePostfix() {
    return this.getStringAttribute('volume_name_postfix');
  }
  public set volumeNamePostfix(value: string) {
    this._volumeNamePostfix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNamePostfixInput() {
    return this._volumeNamePostfix;
  }

  // volume_size - computed: false, optional: false, required: true
  private _volumeSize?: number; 
  public get volumeSize() {
    return this.getNumberAttribute('volume_size');
  }
  public set volumeSize(value: number) {
    this._volumeSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInput() {
    return this._volumeSize;
  }

  // volume_total_size - computed: true, optional: false, required: false
  public get volumeTotalSize() {
    return this.getNumberAttribute('volume_total_size');
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NasVolumeTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NasVolumeTimeouts) {
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
      cifs_user_name: cdktf.stringToTerraform(this._cifsUserName),
      cifs_user_password: cdktf.stringToTerraform(this._cifsUserPassword),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      is_encrypted_volume: cdktf.booleanToTerraform(this._isEncryptedVolume),
      is_return_protection: cdktf.booleanToTerraform(this._isReturnProtection),
      server_instance_no_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serverInstanceNoList),
      volume_allotment_protocol_type: cdktf.stringToTerraform(this._volumeAllotmentProtocolType),
      volume_name_postfix: cdktf.stringToTerraform(this._volumeNamePostfix),
      volume_size: cdktf.numberToTerraform(this._volumeSize),
      zone: cdktf.stringToTerraform(this._zone),
      timeouts: nasVolumeTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cifs_user_name: {
        value: cdktf.stringToHclTerraform(this._cifsUserName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cifs_user_password: {
        value: cdktf.stringToHclTerraform(this._cifsUserPassword),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_encrypted_volume: {
        value: cdktf.booleanToHclTerraform(this._isEncryptedVolume),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_return_protection: {
        value: cdktf.booleanToHclTerraform(this._isReturnProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      server_instance_no_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serverInstanceNoList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      volume_allotment_protocol_type: {
        value: cdktf.stringToHclTerraform(this._volumeAllotmentProtocolType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      volume_name_postfix: {
        value: cdktf.stringToHclTerraform(this._volumeNamePostfix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      volume_size: {
        value: cdktf.numberToHclTerraform(this._volumeSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: nasVolumeTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NasVolumeTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
