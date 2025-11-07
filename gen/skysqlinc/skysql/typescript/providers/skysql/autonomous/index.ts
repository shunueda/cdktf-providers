// https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/autonomous
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutonomousConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/autonomous#auto_scale_disk Autonomous#auto_scale_disk}
  */
  readonly autoScaleDisk?: AutonomousAutoScaleDisk;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/autonomous#auto_scale_nodes_horizontal Autonomous#auto_scale_nodes_horizontal}
  */
  readonly autoScaleNodesHorizontal?: AutonomousAutoScaleNodesHorizontal;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/autonomous#auto_scale_nodes_vertical Autonomous#auto_scale_nodes_vertical}
  */
  readonly autoScaleNodesVertical?: AutonomousAutoScaleNodesVertical;
  /**
  * Service ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/autonomous#service_id Autonomous#service_id}
  */
  readonly serviceId: string;
  /**
  * The name of the service to manage the autonomous features for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/autonomous#service_name Autonomous#service_name}
  */
  readonly serviceName: string;
}
export interface AutonomousAutoScaleDisk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/autonomous#max_storage_size_gbs Autonomous#max_storage_size_gbs}
  */
  readonly maxStorageSizeGbs?: number;
}

export function autonomousAutoScaleDiskToTerraform(struct?: AutonomousAutoScaleDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_storage_size_gbs: cdktf.numberToTerraform(struct!.maxStorageSizeGbs),
  }
}


export function autonomousAutoScaleDiskToHclTerraform(struct?: AutonomousAutoScaleDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_storage_size_gbs: {
      value: cdktf.numberToHclTerraform(struct!.maxStorageSizeGbs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutonomousAutoScaleDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutonomousAutoScaleDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxStorageSizeGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxStorageSizeGbs = this._maxStorageSizeGbs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutonomousAutoScaleDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxStorageSizeGbs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxStorageSizeGbs = value.maxStorageSizeGbs;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_storage_size_gbs - computed: true, optional: true, required: false
  private _maxStorageSizeGbs?: number; 
  public get maxStorageSizeGbs() {
    return this.getNumberAttribute('max_storage_size_gbs');
  }
  public set maxStorageSizeGbs(value: number) {
    this._maxStorageSizeGbs = value;
  }
  public resetMaxStorageSizeGbs() {
    this._maxStorageSizeGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxStorageSizeGbsInput() {
    return this._maxStorageSizeGbs;
  }
}
export interface AutonomousAutoScaleNodesHorizontal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/autonomous#max_nodes Autonomous#max_nodes}
  */
  readonly maxNodes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/autonomous#min_nodes Autonomous#min_nodes}
  */
  readonly minNodes?: number;
}

export function autonomousAutoScaleNodesHorizontalToTerraform(struct?: AutonomousAutoScaleNodesHorizontal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_nodes: cdktf.numberToTerraform(struct!.maxNodes),
    min_nodes: cdktf.numberToTerraform(struct!.minNodes),
  }
}


export function autonomousAutoScaleNodesHorizontalToHclTerraform(struct?: AutonomousAutoScaleNodesHorizontal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_nodes: {
      value: cdktf.numberToHclTerraform(struct!.maxNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_nodes: {
      value: cdktf.numberToHclTerraform(struct!.minNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutonomousAutoScaleNodesHorizontalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutonomousAutoScaleNodesHorizontal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNodes = this._maxNodes;
    }
    if (this._minNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minNodes = this._minNodes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutonomousAutoScaleNodesHorizontal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxNodes = undefined;
      this._minNodes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxNodes = value.maxNodes;
      this._minNodes = value.minNodes;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_nodes - computed: true, optional: true, required: false
  private _maxNodes?: number; 
  public get maxNodes() {
    return this.getNumberAttribute('max_nodes');
  }
  public set maxNodes(value: number) {
    this._maxNodes = value;
  }
  public resetMaxNodes() {
    this._maxNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNodesInput() {
    return this._maxNodes;
  }

  // min_nodes - computed: true, optional: true, required: false
  private _minNodes?: number; 
  public get minNodes() {
    return this.getNumberAttribute('min_nodes');
  }
  public set minNodes(value: number) {
    this._minNodes = value;
  }
  public resetMinNodes() {
    this._minNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minNodesInput() {
    return this._minNodes;
  }
}
export interface AutonomousAutoScaleNodesVertical {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/autonomous#max_node_size Autonomous#max_node_size}
  */
  readonly maxNodeSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/autonomous#min_node_size Autonomous#min_node_size}
  */
  readonly minNodeSize?: string;
}

export function autonomousAutoScaleNodesVerticalToTerraform(struct?: AutonomousAutoScaleNodesVertical | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_node_size: cdktf.stringToTerraform(struct!.maxNodeSize),
    min_node_size: cdktf.stringToTerraform(struct!.minNodeSize),
  }
}


export function autonomousAutoScaleNodesVerticalToHclTerraform(struct?: AutonomousAutoScaleNodesVertical | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_node_size: {
      value: cdktf.stringToHclTerraform(struct!.maxNodeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_node_size: {
      value: cdktf.stringToHclTerraform(struct!.minNodeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutonomousAutoScaleNodesVerticalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutonomousAutoScaleNodesVertical | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxNodeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNodeSize = this._maxNodeSize;
    }
    if (this._minNodeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minNodeSize = this._minNodeSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutonomousAutoScaleNodesVertical | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxNodeSize = undefined;
      this._minNodeSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxNodeSize = value.maxNodeSize;
      this._minNodeSize = value.minNodeSize;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_node_size - computed: true, optional: true, required: false
  private _maxNodeSize?: string; 
  public get maxNodeSize() {
    return this.getStringAttribute('max_node_size');
  }
  public set maxNodeSize(value: string) {
    this._maxNodeSize = value;
  }
  public resetMaxNodeSize() {
    this._maxNodeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNodeSizeInput() {
    return this._maxNodeSize;
  }

  // min_node_size - computed: true, optional: true, required: false
  private _minNodeSize?: string; 
  public get minNodeSize() {
    return this.getStringAttribute('min_node_size');
  }
  public set minNodeSize(value: string) {
    this._minNodeSize = value;
  }
  public resetMinNodeSize() {
    this._minNodeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minNodeSizeInput() {
    return this._minNodeSize;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/autonomous skysql_autonomous}
*/
export class Autonomous extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "skysql_autonomous";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Autonomous resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Autonomous to import
  * @param importFromId The id of the existing Autonomous that should be imported. Refer to the {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/autonomous#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Autonomous to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "skysql_autonomous", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/autonomous skysql_autonomous} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutonomousConfig
  */
  public constructor(scope: Construct, id: string, config: AutonomousConfig) {
    super(scope, id, {
      terraformResourceType: 'skysql_autonomous',
      terraformGeneratorMetadata: {
        providerName: 'skysql',
        providerVersion: '3.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoScaleDisk.internalValue = config.autoScaleDisk;
    this._autoScaleNodesHorizontal.internalValue = config.autoScaleNodesHorizontal;
    this._autoScaleNodesVertical.internalValue = config.autoScaleNodesVertical;
    this._serviceId = config.serviceId;
    this._serviceName = config.serviceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_scale_disk - computed: false, optional: true, required: false
  private _autoScaleDisk = new AutonomousAutoScaleDiskOutputReference(this, "auto_scale_disk");
  public get autoScaleDisk() {
    return this._autoScaleDisk;
  }
  public putAutoScaleDisk(value: AutonomousAutoScaleDisk) {
    this._autoScaleDisk.internalValue = value;
  }
  public resetAutoScaleDisk() {
    this._autoScaleDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScaleDiskInput() {
    return this._autoScaleDisk.internalValue;
  }

  // auto_scale_nodes_horizontal - computed: false, optional: true, required: false
  private _autoScaleNodesHorizontal = new AutonomousAutoScaleNodesHorizontalOutputReference(this, "auto_scale_nodes_horizontal");
  public get autoScaleNodesHorizontal() {
    return this._autoScaleNodesHorizontal;
  }
  public putAutoScaleNodesHorizontal(value: AutonomousAutoScaleNodesHorizontal) {
    this._autoScaleNodesHorizontal.internalValue = value;
  }
  public resetAutoScaleNodesHorizontal() {
    this._autoScaleNodesHorizontal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScaleNodesHorizontalInput() {
    return this._autoScaleNodesHorizontal.internalValue;
  }

  // auto_scale_nodes_vertical - computed: false, optional: true, required: false
  private _autoScaleNodesVertical = new AutonomousAutoScaleNodesVerticalOutputReference(this, "auto_scale_nodes_vertical");
  public get autoScaleNodesVertical() {
    return this._autoScaleNodesVertical;
  }
  public putAutoScaleNodesVertical(value: AutonomousAutoScaleNodesVertical) {
    this._autoScaleNodesVertical.internalValue = value;
  }
  public resetAutoScaleNodesVertical() {
    this._autoScaleNodesVertical.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScaleNodesVerticalInput() {
    return this._autoScaleNodesVertical.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // service_id - computed: false, optional: false, required: true
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_scale_disk: autonomousAutoScaleDiskToTerraform(this._autoScaleDisk.internalValue),
      auto_scale_nodes_horizontal: autonomousAutoScaleNodesHorizontalToTerraform(this._autoScaleNodesHorizontal.internalValue),
      auto_scale_nodes_vertical: autonomousAutoScaleNodesVerticalToTerraform(this._autoScaleNodesVertical.internalValue),
      service_id: cdktf.stringToTerraform(this._serviceId),
      service_name: cdktf.stringToTerraform(this._serviceName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_scale_disk: {
        value: autonomousAutoScaleDiskToHclTerraform(this._autoScaleDisk.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AutonomousAutoScaleDisk",
      },
      auto_scale_nodes_horizontal: {
        value: autonomousAutoScaleNodesHorizontalToHclTerraform(this._autoScaleNodesHorizontal.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AutonomousAutoScaleNodesHorizontal",
      },
      auto_scale_nodes_vertical: {
        value: autonomousAutoScaleNodesVerticalToHclTerraform(this._autoScaleNodesVertical.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AutonomousAutoScaleNodesVertical",
      },
      service_id: {
        value: cdktf.stringToHclTerraform(this._serviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
