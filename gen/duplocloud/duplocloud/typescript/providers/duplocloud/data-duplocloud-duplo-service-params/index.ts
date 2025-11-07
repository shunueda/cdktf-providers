// https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/data-sources/duplo_service_params
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDuplocloudDuploServiceParamsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/data-sources/duplo_service_params#dns_prfx DataDuplocloudDuploServiceParams#dns_prfx}
  */
  readonly dnsPrfx?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/data-sources/duplo_service_params#id DataDuplocloudDuploServiceParams#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/data-sources/duplo_service_params#replication_controller_name DataDuplocloudDuploServiceParams#replication_controller_name}
  */
  readonly replicationControllerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/data-sources/duplo_service_params#tenant_id DataDuplocloudDuploServiceParams#tenant_id}
  */
  readonly tenantId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/data-sources/duplo_service_params#webaclid DataDuplocloudDuploServiceParams#webaclid}
  */
  readonly webaclid?: string;
}
export interface DataDuplocloudDuploServiceParamsResult {
}

export function dataDuplocloudDuploServiceParamsResultToTerraform(struct?: DataDuplocloudDuploServiceParamsResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudDuploServiceParamsResultToHclTerraform(struct?: DataDuplocloudDuploServiceParamsResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudDuploServiceParamsResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudDuploServiceParamsResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudDuploServiceParamsResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns_prfx - computed: true, optional: false, required: false
  public get dnsPrfx() {
    return this.getStringAttribute('dns_prfx');
  }

  // replication_controller_name - computed: true, optional: false, required: false
  public get replicationControllerName() {
    return this.getStringAttribute('replication_controller_name');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // webaclid - computed: true, optional: false, required: false
  public get webaclid() {
    return this.getStringAttribute('webaclid');
  }
}

export class DataDuplocloudDuploServiceParamsResultList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudDuploServiceParamsResultOutputReference {
    return new DataDuplocloudDuploServiceParamsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/data-sources/duplo_service_params duplocloud_duplo_service_params}
*/
export class DataDuplocloudDuploServiceParams extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "duplocloud_duplo_service_params";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDuplocloudDuploServiceParams resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDuplocloudDuploServiceParams to import
  * @param importFromId The id of the existing DataDuplocloudDuploServiceParams that should be imported. Refer to the {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/data-sources/duplo_service_params#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDuplocloudDuploServiceParams to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "duplocloud_duplo_service_params", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/data-sources/duplo_service_params duplocloud_duplo_service_params} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDuplocloudDuploServiceParamsConfig
  */
  public constructor(scope: Construct, id: string, config: DataDuplocloudDuploServiceParamsConfig) {
    super(scope, id, {
      terraformResourceType: 'duplocloud_duplo_service_params',
      terraformGeneratorMetadata: {
        providerName: 'duplocloud',
        providerVersion: '0.11.28'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dnsPrfx = config.dnsPrfx;
    this._id = config.id;
    this._replicationControllerName = config.replicationControllerName;
    this._tenantId = config.tenantId;
    this._webaclid = config.webaclid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_prfx - computed: false, optional: true, required: false
  private _dnsPrfx?: string; 
  public get dnsPrfx() {
    return this.getStringAttribute('dns_prfx');
  }
  public set dnsPrfx(value: string) {
    this._dnsPrfx = value;
  }
  public resetDnsPrfx() {
    this._dnsPrfx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsPrfxInput() {
    return this._dnsPrfx;
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

  // replication_controller_name - computed: false, optional: true, required: false
  private _replicationControllerName?: string; 
  public get replicationControllerName() {
    return this.getStringAttribute('replication_controller_name');
  }
  public set replicationControllerName(value: string) {
    this._replicationControllerName = value;
  }
  public resetReplicationControllerName() {
    this._replicationControllerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationControllerNameInput() {
    return this._replicationControllerName;
  }

  // result - computed: true, optional: false, required: false
  private _result = new DataDuplocloudDuploServiceParamsResultList(this, "result", false);
  public get result() {
    return this._result;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // webaclid - computed: false, optional: true, required: false
  private _webaclid?: string; 
  public get webaclid() {
    return this.getStringAttribute('webaclid');
  }
  public set webaclid(value: string) {
    this._webaclid = value;
  }
  public resetWebaclid() {
    this._webaclid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webaclidInput() {
    return this._webaclid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dns_prfx: cdktf.stringToTerraform(this._dnsPrfx),
      id: cdktf.stringToTerraform(this._id),
      replication_controller_name: cdktf.stringToTerraform(this._replicationControllerName),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      webaclid: cdktf.stringToTerraform(this._webaclid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dns_prfx: {
        value: cdktf.stringToHclTerraform(this._dnsPrfx),
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
      replication_controller_name: {
        value: cdktf.stringToHclTerraform(this._replicationControllerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webaclid: {
        value: cdktf.stringToHclTerraform(this._webaclid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
