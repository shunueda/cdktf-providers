// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/logging_local_log_app_fw
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoggingLocalLogAppFwConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/logging_local_log_app_fw#id LoggingLocalLogAppFw#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/logging_local_log_app_fw#uuid LoggingLocalLogAppFw#uuid}
  */
  readonly uuid?: string;
  /**
  * dot_plot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/logging_local_log_app_fw#dot_plot LoggingLocalLogAppFw#dot_plot}
  */
  readonly dotPlot?: LoggingLocalLogAppFwDotPlot;
  /**
  * top_n block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/logging_local_log_app_fw#top_n LoggingLocalLogAppFw#top_n}
  */
  readonly topN?: LoggingLocalLogAppFwTopN;
}
export interface LoggingLocalLogAppFwDotPlot {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/logging_local_log_app_fw#uuid LoggingLocalLogAppFw#uuid}
  */
  readonly uuid?: string;
}

export function loggingLocalLogAppFwDotPlotToTerraform(struct?: LoggingLocalLogAppFwDotPlotOutputReference | LoggingLocalLogAppFwDotPlot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function loggingLocalLogAppFwDotPlotToHclTerraform(struct?: LoggingLocalLogAppFwDotPlotOutputReference | LoggingLocalLogAppFwDotPlot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoggingLocalLogAppFwDotPlotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoggingLocalLogAppFwDotPlot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingLocalLogAppFwDotPlot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface LoggingLocalLogAppFwTopN {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/logging_local_log_app_fw#uuid LoggingLocalLogAppFw#uuid}
  */
  readonly uuid?: string;
}

export function loggingLocalLogAppFwTopNToTerraform(struct?: LoggingLocalLogAppFwTopNOutputReference | LoggingLocalLogAppFwTopN): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function loggingLocalLogAppFwTopNToHclTerraform(struct?: LoggingLocalLogAppFwTopNOutputReference | LoggingLocalLogAppFwTopN): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoggingLocalLogAppFwTopNOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoggingLocalLogAppFwTopN | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingLocalLogAppFwTopN | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/logging_local_log_app_fw thunder_logging_local_log_app_fw}
*/
export class LoggingLocalLogAppFw extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_logging_local_log_app_fw";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LoggingLocalLogAppFw resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LoggingLocalLogAppFw to import
  * @param importFromId The id of the existing LoggingLocalLogAppFw that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/logging_local_log_app_fw#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LoggingLocalLogAppFw to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_logging_local_log_app_fw", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/logging_local_log_app_fw thunder_logging_local_log_app_fw} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoggingLocalLogAppFwConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LoggingLocalLogAppFwConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_logging_local_log_app_fw',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
    this._uuid = config.uuid;
    this._dotPlot.internalValue = config.dotPlot;
    this._topN.internalValue = config.topN;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // dot_plot - computed: false, optional: true, required: false
  private _dotPlot = new LoggingLocalLogAppFwDotPlotOutputReference(this, "dot_plot");
  public get dotPlot() {
    return this._dotPlot;
  }
  public putDotPlot(value: LoggingLocalLogAppFwDotPlot) {
    this._dotPlot.internalValue = value;
  }
  public resetDotPlot() {
    this._dotPlot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dotPlotInput() {
    return this._dotPlot.internalValue;
  }

  // top_n - computed: false, optional: true, required: false
  private _topN = new LoggingLocalLogAppFwTopNOutputReference(this, "top_n");
  public get topN() {
    return this._topN;
  }
  public putTopN(value: LoggingLocalLogAppFwTopN) {
    this._topN.internalValue = value;
  }
  public resetTopN() {
    this._topN.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topNInput() {
    return this._topN.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      dot_plot: loggingLocalLogAppFwDotPlotToTerraform(this._dotPlot.internalValue),
      top_n: loggingLocalLogAppFwTopNToTerraform(this._topN.internalValue),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dot_plot: {
        value: loggingLocalLogAppFwDotPlotToHclTerraform(this._dotPlot.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LoggingLocalLogAppFwDotPlotList",
      },
      top_n: {
        value: loggingLocalLogAppFwTopNToHclTerraform(this._topN.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LoggingLocalLogAppFwTopNList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
