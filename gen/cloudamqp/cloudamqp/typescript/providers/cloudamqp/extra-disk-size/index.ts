// https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.2/docs/resources/extra_disk_size
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExtraDiskSizeConfig extends cdktf.TerraformMetaArguments {
  /**
  * When resizing disk, allow cluster downtime to do so
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.2/docs/resources/extra_disk_size#allow_downtime ExtraDiskSize#allow_downtime}
  */
  readonly allowDowntime?: boolean | cdktf.IResolvable;
  /**
  * Extra disk size in GB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.2/docs/resources/extra_disk_size#extra_disk_size ExtraDiskSize#extra_disk_size}
  */
  readonly extraDiskSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.2/docs/resources/extra_disk_size#id ExtraDiskSize#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.2/docs/resources/extra_disk_size#instance_id ExtraDiskSize#instance_id}
  */
  readonly instanceId: number;
  /**
  * Configurable sleep time in seconds between retries for resizing the disk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.2/docs/resources/extra_disk_size#sleep ExtraDiskSize#sleep}
  */
  readonly sleep?: number;
  /**
  * Configurable timeout time in seconds for resizing the disk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.2/docs/resources/extra_disk_size#timeout ExtraDiskSize#timeout}
  */
  readonly timeout?: number;
}
export interface ExtraDiskSizeNodes {
}

export function extraDiskSizeNodesToTerraform(struct?: ExtraDiskSizeNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function extraDiskSizeNodesToHclTerraform(struct?: ExtraDiskSizeNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ExtraDiskSizeNodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ExtraDiskSizeNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExtraDiskSizeNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_disk_size - computed: true, optional: false, required: false
  public get additionalDiskSize() {
    return this.getNumberAttribute('additional_disk_size');
  }

  // disk_size - computed: true, optional: false, required: false
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class ExtraDiskSizeNodesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ExtraDiskSizeNodesOutputReference {
    return new ExtraDiskSizeNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.2/docs/resources/extra_disk_size cloudamqp_extra_disk_size}
*/
export class ExtraDiskSize extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudamqp_extra_disk_size";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ExtraDiskSize resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ExtraDiskSize to import
  * @param importFromId The id of the existing ExtraDiskSize that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.2/docs/resources/extra_disk_size#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ExtraDiskSize to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudamqp_extra_disk_size", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.2/docs/resources/extra_disk_size cloudamqp_extra_disk_size} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExtraDiskSizeConfig
  */
  public constructor(scope: Construct, id: string, config: ExtraDiskSizeConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudamqp_extra_disk_size',
      terraformGeneratorMetadata: {
        providerName: 'cloudamqp',
        providerVersion: '1.38.2',
        providerVersionConstraint: '1.38.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowDowntime = config.allowDowntime;
    this._extraDiskSize = config.extraDiskSize;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._sleep = config.sleep;
    this._timeout = config.timeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_downtime - computed: false, optional: true, required: false
  private _allowDowntime?: boolean | cdktf.IResolvable; 
  public get allowDowntime() {
    return this.getBooleanAttribute('allow_downtime');
  }
  public set allowDowntime(value: boolean | cdktf.IResolvable) {
    this._allowDowntime = value;
  }
  public resetAllowDowntime() {
    this._allowDowntime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDowntimeInput() {
    return this._allowDowntime;
  }

  // extra_disk_size - computed: false, optional: false, required: true
  private _extraDiskSize?: number; 
  public get extraDiskSize() {
    return this.getNumberAttribute('extra_disk_size');
  }
  public set extraDiskSize(value: number) {
    this._extraDiskSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extraDiskSizeInput() {
    return this._extraDiskSize;
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
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // nodes - computed: true, optional: false, required: false
  private _nodes = new ExtraDiskSizeNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }

  // sleep - computed: false, optional: true, required: false
  private _sleep?: number; 
  public get sleep() {
    return this.getNumberAttribute('sleep');
  }
  public set sleep(value: number) {
    this._sleep = value;
  }
  public resetSleep() {
    this._sleep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sleepInput() {
    return this._sleep;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_downtime: cdktf.booleanToTerraform(this._allowDowntime),
      extra_disk_size: cdktf.numberToTerraform(this._extraDiskSize),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.numberToTerraform(this._instanceId),
      sleep: cdktf.numberToTerraform(this._sleep),
      timeout: cdktf.numberToTerraform(this._timeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_downtime: {
        value: cdktf.booleanToHclTerraform(this._allowDowntime),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      extra_disk_size: {
        value: cdktf.numberToHclTerraform(this._extraDiskSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_id: {
        value: cdktf.numberToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sleep: {
        value: cdktf.numberToHclTerraform(this._sleep),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
