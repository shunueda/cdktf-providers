// https://registry.terraform.io/providers/fivetran/fivetran/1.9.16/docs/data-sources/external_logs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFivetranExternalLogsConfig extends cdktf.TerraformMetaArguments {
  /**
  * logs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.16/docs/data-sources/external_logs#logs DataFivetranExternalLogs#logs}
  */
  readonly logs?: DataFivetranExternalLogsLogs[] | cdktf.IResolvable;
}
export interface DataFivetranExternalLogsLogs {
}

export function dataFivetranExternalLogsLogsToTerraform(struct?: DataFivetranExternalLogsLogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFivetranExternalLogsLogsToHclTerraform(struct?: DataFivetranExternalLogsLogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFivetranExternalLogsLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataFivetranExternalLogsLogs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFivetranExternalLogsLogs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getStringAttribute('service');
  }
}

export class DataFivetranExternalLogsLogsList extends cdktf.ComplexList {
  public internalValue? : DataFivetranExternalLogsLogs[] | cdktf.IResolvable

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
  public get(index: number): DataFivetranExternalLogsLogsOutputReference {
    return new DataFivetranExternalLogsLogsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.16/docs/data-sources/external_logs fivetran_external_logs}
*/
export class DataFivetranExternalLogs extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fivetran_external_logs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFivetranExternalLogs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFivetranExternalLogs to import
  * @param importFromId The id of the existing DataFivetranExternalLogs that should be imported. Refer to the {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.16/docs/data-sources/external_logs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFivetranExternalLogs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fivetran_external_logs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.16/docs/data-sources/external_logs fivetran_external_logs} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFivetranExternalLogsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataFivetranExternalLogsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fivetran_external_logs',
      terraformGeneratorMetadata: {
        providerName: 'fivetran',
        providerVersion: '1.9.16',
        providerVersionConstraint: '1.9.16'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._logs.internalValue = config.logs;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // logs - computed: false, optional: true, required: false
  private _logs = new DataFivetranExternalLogsLogsList(this, "logs", true);
  public get logs() {
    return this._logs;
  }
  public putLogs(value: DataFivetranExternalLogsLogs[] | cdktf.IResolvable) {
    this._logs.internalValue = value;
  }
  public resetLogs() {
    this._logs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsInput() {
    return this._logs.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      logs: cdktf.listMapper(dataFivetranExternalLogsLogsToTerraform, true)(this._logs.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      logs: {
        value: cdktf.listMapperHcl(dataFivetranExternalLogsLogsToHclTerraform, true)(this._logs.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataFivetranExternalLogsLogsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
