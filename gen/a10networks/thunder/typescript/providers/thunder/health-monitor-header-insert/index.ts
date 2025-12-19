// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_header_insert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HealthMonitorHeaderInsertAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_header_insert#id HealthMonitorHeaderInsertA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Monitor_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_header_insert#monitor_name HealthMonitorHeaderInsertA#monitor_name}
  */
  readonly monitorName: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_header_insert#uuid HealthMonitorHeaderInsertA#uuid}
  */
  readonly uuid?: string;
  /**
  * insert_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_header_insert#insert_list HealthMonitorHeaderInsertA#insert_list}
  */
  readonly insertList?: HealthMonitorHeaderInsertInsertListStructA[] | cdktf.IResolvable;
}
export interface HealthMonitorHeaderInsertInsertListStructA {
  /**
  * Header Content (Format: "[name]:[value]")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_header_insert#insert_content HealthMonitorHeaderInsertA#insert_content}
  */
  readonly insertContent?: string;
}

export function healthMonitorHeaderInsertInsertListStructAToTerraform(struct?: HealthMonitorHeaderInsertInsertListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    insert_content: cdktf.stringToTerraform(struct!.insertContent),
  }
}


export function healthMonitorHeaderInsertInsertListStructAToHclTerraform(struct?: HealthMonitorHeaderInsertInsertListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    insert_content: {
      value: cdktf.stringToHclTerraform(struct!.insertContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthMonitorHeaderInsertInsertListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HealthMonitorHeaderInsertInsertListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insertContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertContent = this._insertContent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthMonitorHeaderInsertInsertListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._insertContent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._insertContent = value.insertContent;
    }
  }

  // insert_content - computed: false, optional: true, required: false
  private _insertContent?: string; 
  public get insertContent() {
    return this.getStringAttribute('insert_content');
  }
  public set insertContent(value: string) {
    this._insertContent = value;
  }
  public resetInsertContent() {
    this._insertContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertContentInput() {
    return this._insertContent;
  }
}

export class HealthMonitorHeaderInsertInsertListStructAList extends cdktf.ComplexList {
  public internalValue? : HealthMonitorHeaderInsertInsertListStructA[] | cdktf.IResolvable

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
  public get(index: number): HealthMonitorHeaderInsertInsertListStructAOutputReference {
    return new HealthMonitorHeaderInsertInsertListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_header_insert thunder_health_monitor_header_insert}
*/
export class HealthMonitorHeaderInsertA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_health_monitor_header_insert";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HealthMonitorHeaderInsertA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HealthMonitorHeaderInsertA to import
  * @param importFromId The id of the existing HealthMonitorHeaderInsertA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_header_insert#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HealthMonitorHeaderInsertA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_health_monitor_header_insert", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_header_insert thunder_health_monitor_header_insert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HealthMonitorHeaderInsertAConfig
  */
  public constructor(scope: Construct, id: string, config: HealthMonitorHeaderInsertAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_health_monitor_header_insert',
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
    this._monitorName = config.monitorName;
    this._uuid = config.uuid;
    this._insertList.internalValue = config.insertList;
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

  // monitor_name - computed: false, optional: false, required: true
  private _monitorName?: string; 
  public get monitorName() {
    return this.getStringAttribute('monitor_name');
  }
  public set monitorName(value: string) {
    this._monitorName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorNameInput() {
    return this._monitorName;
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

  // insert_list - computed: false, optional: true, required: false
  private _insertList = new HealthMonitorHeaderInsertInsertListStructAList(this, "insert_list", false);
  public get insertList() {
    return this._insertList;
  }
  public putInsertList(value: HealthMonitorHeaderInsertInsertListStructA[] | cdktf.IResolvable) {
    this._insertList.internalValue = value;
  }
  public resetInsertList() {
    this._insertList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertListInput() {
    return this._insertList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      monitor_name: cdktf.stringToTerraform(this._monitorName),
      uuid: cdktf.stringToTerraform(this._uuid),
      insert_list: cdktf.listMapper(healthMonitorHeaderInsertInsertListStructAToTerraform, true)(this._insertList.internalValue),
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
      monitor_name: {
        value: cdktf.stringToHclTerraform(this._monitorName),
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
      insert_list: {
        value: cdktf.listMapperHcl(healthMonitorHeaderInsertInsertListStructAToHclTerraform, true)(this._insertList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HealthMonitorHeaderInsertInsertListStructAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
