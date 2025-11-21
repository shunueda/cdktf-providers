// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/oos_service_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OosServiceSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/oos_service_setting#delivery_oss_bucket_name OosServiceSetting#delivery_oss_bucket_name}
  */
  readonly deliveryOssBucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/oos_service_setting#delivery_oss_enabled OosServiceSetting#delivery_oss_enabled}
  */
  readonly deliveryOssEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/oos_service_setting#delivery_oss_key_prefix OosServiceSetting#delivery_oss_key_prefix}
  */
  readonly deliveryOssKeyPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/oos_service_setting#delivery_sls_enabled OosServiceSetting#delivery_sls_enabled}
  */
  readonly deliverySlsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/oos_service_setting#delivery_sls_project_name OosServiceSetting#delivery_sls_project_name}
  */
  readonly deliverySlsProjectName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/oos_service_setting#id OosServiceSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/oos_service_setting alicloud_oos_service_setting}
*/
export class OosServiceSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_oos_service_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OosServiceSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OosServiceSetting to import
  * @param importFromId The id of the existing OosServiceSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/oos_service_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OosServiceSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_oos_service_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/oos_service_setting alicloud_oos_service_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OosServiceSettingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OosServiceSettingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_oos_service_setting',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.263.0',
        providerVersionConstraint: '1.263.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deliveryOssBucketName = config.deliveryOssBucketName;
    this._deliveryOssEnabled = config.deliveryOssEnabled;
    this._deliveryOssKeyPrefix = config.deliveryOssKeyPrefix;
    this._deliverySlsEnabled = config.deliverySlsEnabled;
    this._deliverySlsProjectName = config.deliverySlsProjectName;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delivery_oss_bucket_name - computed: false, optional: true, required: false
  private _deliveryOssBucketName?: string; 
  public get deliveryOssBucketName() {
    return this.getStringAttribute('delivery_oss_bucket_name');
  }
  public set deliveryOssBucketName(value: string) {
    this._deliveryOssBucketName = value;
  }
  public resetDeliveryOssBucketName() {
    this._deliveryOssBucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryOssBucketNameInput() {
    return this._deliveryOssBucketName;
  }

  // delivery_oss_enabled - computed: false, optional: true, required: false
  private _deliveryOssEnabled?: boolean | cdktf.IResolvable; 
  public get deliveryOssEnabled() {
    return this.getBooleanAttribute('delivery_oss_enabled');
  }
  public set deliveryOssEnabled(value: boolean | cdktf.IResolvable) {
    this._deliveryOssEnabled = value;
  }
  public resetDeliveryOssEnabled() {
    this._deliveryOssEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryOssEnabledInput() {
    return this._deliveryOssEnabled;
  }

  // delivery_oss_key_prefix - computed: false, optional: true, required: false
  private _deliveryOssKeyPrefix?: string; 
  public get deliveryOssKeyPrefix() {
    return this.getStringAttribute('delivery_oss_key_prefix');
  }
  public set deliveryOssKeyPrefix(value: string) {
    this._deliveryOssKeyPrefix = value;
  }
  public resetDeliveryOssKeyPrefix() {
    this._deliveryOssKeyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryOssKeyPrefixInput() {
    return this._deliveryOssKeyPrefix;
  }

  // delivery_sls_enabled - computed: false, optional: true, required: false
  private _deliverySlsEnabled?: boolean | cdktf.IResolvable; 
  public get deliverySlsEnabled() {
    return this.getBooleanAttribute('delivery_sls_enabled');
  }
  public set deliverySlsEnabled(value: boolean | cdktf.IResolvable) {
    this._deliverySlsEnabled = value;
  }
  public resetDeliverySlsEnabled() {
    this._deliverySlsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliverySlsEnabledInput() {
    return this._deliverySlsEnabled;
  }

  // delivery_sls_project_name - computed: false, optional: true, required: false
  private _deliverySlsProjectName?: string; 
  public get deliverySlsProjectName() {
    return this.getStringAttribute('delivery_sls_project_name');
  }
  public set deliverySlsProjectName(value: string) {
    this._deliverySlsProjectName = value;
  }
  public resetDeliverySlsProjectName() {
    this._deliverySlsProjectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliverySlsProjectNameInput() {
    return this._deliverySlsProjectName;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delivery_oss_bucket_name: cdktf.stringToTerraform(this._deliveryOssBucketName),
      delivery_oss_enabled: cdktf.booleanToTerraform(this._deliveryOssEnabled),
      delivery_oss_key_prefix: cdktf.stringToTerraform(this._deliveryOssKeyPrefix),
      delivery_sls_enabled: cdktf.booleanToTerraform(this._deliverySlsEnabled),
      delivery_sls_project_name: cdktf.stringToTerraform(this._deliverySlsProjectName),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delivery_oss_bucket_name: {
        value: cdktf.stringToHclTerraform(this._deliveryOssBucketName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delivery_oss_enabled: {
        value: cdktf.booleanToHclTerraform(this._deliveryOssEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delivery_oss_key_prefix: {
        value: cdktf.stringToHclTerraform(this._deliveryOssKeyPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delivery_sls_enabled: {
        value: cdktf.booleanToHclTerraform(this._deliverySlsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delivery_sls_project_name: {
        value: cdktf.stringToHclTerraform(this._deliverySlsProjectName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
