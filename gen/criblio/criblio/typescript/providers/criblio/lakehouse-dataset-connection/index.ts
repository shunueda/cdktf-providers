// https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs/resources/lakehouse_dataset_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LakehouseDatasetConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the dataset within the lakehouse
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs/resources/lakehouse_dataset_connection#lake_dataset_id LakehouseDatasetConnection#lake_dataset_id}
  */
  readonly lakeDatasetId: string;
  /**
  * The ID of the lakehouse
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs/resources/lakehouse_dataset_connection#lakehouse_id LakehouseDatasetConnection#lakehouse_id}
  */
  readonly lakehouseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs/resources/lakehouse_dataset_connection#request_body LakehouseDatasetConnection#request_body}
  */
  readonly requestBody?: LakehouseDatasetConnectionRequestBody;
}
export interface LakehouseDatasetConnectionRequestBody {
}

export function lakehouseDatasetConnectionRequestBodyToTerraform(struct?: LakehouseDatasetConnectionRequestBody | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function lakehouseDatasetConnectionRequestBodyToHclTerraform(struct?: LakehouseDatasetConnectionRequestBody | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LakehouseDatasetConnectionRequestBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LakehouseDatasetConnectionRequestBody | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LakehouseDatasetConnectionRequestBody | cdktf.IResolvable | undefined) {
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs/resources/lakehouse_dataset_connection criblio_lakehouse_dataset_connection}
*/
export class LakehouseDatasetConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "criblio_lakehouse_dataset_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LakehouseDatasetConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LakehouseDatasetConnection to import
  * @param importFromId The id of the existing LakehouseDatasetConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs/resources/lakehouse_dataset_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LakehouseDatasetConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "criblio_lakehouse_dataset_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs/resources/lakehouse_dataset_connection criblio_lakehouse_dataset_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LakehouseDatasetConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: LakehouseDatasetConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'criblio_lakehouse_dataset_connection',
      terraformGeneratorMetadata: {
        providerName: 'criblio',
        providerVersion: '1.20.64',
        providerVersionConstraint: '1.20.64'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._lakeDatasetId = config.lakeDatasetId;
    this._lakehouseId = config.lakehouseId;
    this._requestBody.internalValue = config.requestBody;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // lake_dataset_id - computed: false, optional: false, required: true
  private _lakeDatasetId?: string; 
  public get lakeDatasetId() {
    return this.getStringAttribute('lake_dataset_id');
  }
  public set lakeDatasetId(value: string) {
    this._lakeDatasetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lakeDatasetIdInput() {
    return this._lakeDatasetId;
  }

  // lakehouse_id - computed: false, optional: false, required: true
  private _lakehouseId?: string; 
  public get lakehouseId() {
    return this.getStringAttribute('lakehouse_id');
  }
  public set lakehouseId(value: string) {
    this._lakehouseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lakehouseIdInput() {
    return this._lakehouseId;
  }

  // request_body - computed: false, optional: true, required: false
  private _requestBody = new LakehouseDatasetConnectionRequestBodyOutputReference(this, "request_body");
  public get requestBody() {
    return this._requestBody;
  }
  public putRequestBody(value: LakehouseDatasetConnectionRequestBody) {
    this._requestBody.internalValue = value;
  }
  public resetRequestBody() {
    this._requestBody.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestBodyInput() {
    return this._requestBody.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      lake_dataset_id: cdktf.stringToTerraform(this._lakeDatasetId),
      lakehouse_id: cdktf.stringToTerraform(this._lakehouseId),
      request_body: lakehouseDatasetConnectionRequestBodyToTerraform(this._requestBody.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      lake_dataset_id: {
        value: cdktf.stringToHclTerraform(this._lakeDatasetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lakehouse_id: {
        value: cdktf.stringToHclTerraform(this._lakehouseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_body: {
        value: lakehouseDatasetConnectionRequestBodyToHclTerraform(this._requestBody.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LakehouseDatasetConnectionRequestBody",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
