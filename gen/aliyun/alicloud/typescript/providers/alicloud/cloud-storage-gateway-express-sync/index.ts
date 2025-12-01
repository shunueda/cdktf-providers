// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cloud_storage_gateway_express_sync
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudStorageGatewayExpressSyncConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cloud_storage_gateway_express_sync#bucket_name CloudStorageGatewayExpressSync#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cloud_storage_gateway_express_sync#bucket_prefix CloudStorageGatewayExpressSync#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cloud_storage_gateway_express_sync#bucket_region CloudStorageGatewayExpressSync#bucket_region}
  */
  readonly bucketRegion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cloud_storage_gateway_express_sync#description CloudStorageGatewayExpressSync#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cloud_storage_gateway_express_sync#express_sync_name CloudStorageGatewayExpressSync#express_sync_name}
  */
  readonly expressSyncName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cloud_storage_gateway_express_sync#id CloudStorageGatewayExpressSync#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cloud_storage_gateway_express_sync#timeouts CloudStorageGatewayExpressSync#timeouts}
  */
  readonly timeouts?: CloudStorageGatewayExpressSyncTimeouts;
}
export interface CloudStorageGatewayExpressSyncTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cloud_storage_gateway_express_sync#delete CloudStorageGatewayExpressSync#delete}
  */
  readonly delete?: string;
}

export function cloudStorageGatewayExpressSyncTimeoutsToTerraform(struct?: CloudStorageGatewayExpressSyncTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function cloudStorageGatewayExpressSyncTimeoutsToHclTerraform(struct?: CloudStorageGatewayExpressSyncTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class CloudStorageGatewayExpressSyncTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudStorageGatewayExpressSyncTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudStorageGatewayExpressSyncTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delete = value.delete;
    }
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cloud_storage_gateway_express_sync alicloud_cloud_storage_gateway_express_sync}
*/
export class CloudStorageGatewayExpressSync extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cloud_storage_gateway_express_sync";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudStorageGatewayExpressSync resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudStorageGatewayExpressSync to import
  * @param importFromId The id of the existing CloudStorageGatewayExpressSync that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cloud_storage_gateway_express_sync#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudStorageGatewayExpressSync to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cloud_storage_gateway_express_sync", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cloud_storage_gateway_express_sync alicloud_cloud_storage_gateway_express_sync} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudStorageGatewayExpressSyncConfig
  */
  public constructor(scope: Construct, id: string, config: CloudStorageGatewayExpressSyncConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cloud_storage_gateway_express_sync',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bucketName = config.bucketName;
    this._bucketPrefix = config.bucketPrefix;
    this._bucketRegion = config.bucketRegion;
    this._description = config.description;
    this._expressSyncName = config.expressSyncName;
    this._id = config.id;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // bucket_prefix - computed: false, optional: true, required: false
  private _bucketPrefix?: string; 
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }
  public set bucketPrefix(value: string) {
    this._bucketPrefix = value;
  }
  public resetBucketPrefix() {
    this._bucketPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPrefixInput() {
    return this._bucketPrefix;
  }

  // bucket_region - computed: false, optional: false, required: true
  private _bucketRegion?: string; 
  public get bucketRegion() {
    return this.getStringAttribute('bucket_region');
  }
  public set bucketRegion(value: string) {
    this._bucketRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketRegionInput() {
    return this._bucketRegion;
  }

  // description - computed: false, optional: true, required: false
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

  // express_sync_name - computed: false, optional: false, required: true
  private _expressSyncName?: string; 
  public get expressSyncName() {
    return this.getStringAttribute('express_sync_name');
  }
  public set expressSyncName(value: string) {
    this._expressSyncName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressSyncNameInput() {
    return this._expressSyncName;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudStorageGatewayExpressSyncTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudStorageGatewayExpressSyncTimeouts) {
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
      bucket_name: cdktf.stringToTerraform(this._bucketName),
      bucket_prefix: cdktf.stringToTerraform(this._bucketPrefix),
      bucket_region: cdktf.stringToTerraform(this._bucketRegion),
      description: cdktf.stringToTerraform(this._description),
      express_sync_name: cdktf.stringToTerraform(this._expressSyncName),
      id: cdktf.stringToTerraform(this._id),
      timeouts: cloudStorageGatewayExpressSyncTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket_name: {
        value: cdktf.stringToHclTerraform(this._bucketName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bucket_prefix: {
        value: cdktf.stringToHclTerraform(this._bucketPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bucket_region: {
        value: cdktf.stringToHclTerraform(this._bucketRegion),
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
      express_sync_name: {
        value: cdktf.stringToHclTerraform(this._expressSyncName),
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
      timeouts: {
        value: cloudStorageGatewayExpressSyncTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudStorageGatewayExpressSyncTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
