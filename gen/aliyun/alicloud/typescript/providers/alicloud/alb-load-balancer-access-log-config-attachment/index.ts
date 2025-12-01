// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_load_balancer_access_log_config_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlbLoadBalancerAccessLogConfigAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_load_balancer_access_log_config_attachment#id AlbLoadBalancerAccessLogConfigAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_load_balancer_access_log_config_attachment#load_balancer_id AlbLoadBalancerAccessLogConfigAttachment#load_balancer_id}
  */
  readonly loadBalancerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_load_balancer_access_log_config_attachment#log_project AlbLoadBalancerAccessLogConfigAttachment#log_project}
  */
  readonly logProject: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_load_balancer_access_log_config_attachment#log_store AlbLoadBalancerAccessLogConfigAttachment#log_store}
  */
  readonly logStore: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_load_balancer_access_log_config_attachment#timeouts AlbLoadBalancerAccessLogConfigAttachment#timeouts}
  */
  readonly timeouts?: AlbLoadBalancerAccessLogConfigAttachmentTimeouts;
}
export interface AlbLoadBalancerAccessLogConfigAttachmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_load_balancer_access_log_config_attachment#create AlbLoadBalancerAccessLogConfigAttachment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_load_balancer_access_log_config_attachment#delete AlbLoadBalancerAccessLogConfigAttachment#delete}
  */
  readonly delete?: string;
}

export function albLoadBalancerAccessLogConfigAttachmentTimeoutsToTerraform(struct?: AlbLoadBalancerAccessLogConfigAttachmentTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function albLoadBalancerAccessLogConfigAttachmentTimeoutsToHclTerraform(struct?: AlbLoadBalancerAccessLogConfigAttachmentTimeouts | cdktf.IResolvable): any {
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

export class AlbLoadBalancerAccessLogConfigAttachmentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlbLoadBalancerAccessLogConfigAttachmentTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AlbLoadBalancerAccessLogConfigAttachmentTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_load_balancer_access_log_config_attachment alicloud_alb_load_balancer_access_log_config_attachment}
*/
export class AlbLoadBalancerAccessLogConfigAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_alb_load_balancer_access_log_config_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlbLoadBalancerAccessLogConfigAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlbLoadBalancerAccessLogConfigAttachment to import
  * @param importFromId The id of the existing AlbLoadBalancerAccessLogConfigAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_load_balancer_access_log_config_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlbLoadBalancerAccessLogConfigAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_alb_load_balancer_access_log_config_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/alb_load_balancer_access_log_config_attachment alicloud_alb_load_balancer_access_log_config_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlbLoadBalancerAccessLogConfigAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: AlbLoadBalancerAccessLogConfigAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_alb_load_balancer_access_log_config_attachment',
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
    this._id = config.id;
    this._loadBalancerId = config.loadBalancerId;
    this._logProject = config.logProject;
    this._logStore = config.logStore;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // load_balancer_id - computed: false, optional: false, required: true
  private _loadBalancerId?: string; 
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }
  public set loadBalancerId(value: string) {
    this._loadBalancerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerIdInput() {
    return this._loadBalancerId;
  }

  // log_project - computed: false, optional: false, required: true
  private _logProject?: string; 
  public get logProject() {
    return this.getStringAttribute('log_project');
  }
  public set logProject(value: string) {
    this._logProject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logProjectInput() {
    return this._logProject;
  }

  // log_store - computed: false, optional: false, required: true
  private _logStore?: string; 
  public get logStore() {
    return this.getStringAttribute('log_store');
  }
  public set logStore(value: string) {
    this._logStore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logStoreInput() {
    return this._logStore;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AlbLoadBalancerAccessLogConfigAttachmentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AlbLoadBalancerAccessLogConfigAttachmentTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      load_balancer_id: cdktf.stringToTerraform(this._loadBalancerId),
      log_project: cdktf.stringToTerraform(this._logProject),
      log_store: cdktf.stringToTerraform(this._logStore),
      timeouts: albLoadBalancerAccessLogConfigAttachmentTimeoutsToTerraform(this._timeouts.internalValue),
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
      load_balancer_id: {
        value: cdktf.stringToHclTerraform(this._loadBalancerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_project: {
        value: cdktf.stringToHclTerraform(this._logProject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_store: {
        value: cdktf.stringToHclTerraform(this._logStore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: albLoadBalancerAccessLogConfigAttachmentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AlbLoadBalancerAccessLogConfigAttachmentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
