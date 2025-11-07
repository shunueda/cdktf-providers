// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_kerberos_instance_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderAamAuthenticationRelayKerberosInstanceOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_kerberos_instance_oper#id DataThunderAamAuthenticationRelayKerberosInstanceOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify Kerberos authentication relay name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_kerberos_instance_oper#name DataThunderAamAuthenticationRelayKerberosInstanceOper#name}
  */
  readonly name: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_kerberos_instance_oper#oper DataThunderAamAuthenticationRelayKerberosInstanceOper#oper}
  */
  readonly oper?: DataThunderAamAuthenticationRelayKerberosInstanceOperOper;
}
export interface DataThunderAamAuthenticationRelayKerberosInstanceOperOperItemListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_kerberos_instance_oper#client_principal DataThunderAamAuthenticationRelayKerberosInstanceOper#client_principal}
  */
  readonly clientPrincipal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_kerberos_instance_oper#end_time DataThunderAamAuthenticationRelayKerberosInstanceOper#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_kerberos_instance_oper#flags DataThunderAamAuthenticationRelayKerberosInstanceOper#flags}
  */
  readonly flags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_kerberos_instance_oper#renew_time DataThunderAamAuthenticationRelayKerberosInstanceOper#renew_time}
  */
  readonly renewTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_kerberos_instance_oper#service_principal DataThunderAamAuthenticationRelayKerberosInstanceOper#service_principal}
  */
  readonly servicePrincipal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_kerberos_instance_oper#start_time DataThunderAamAuthenticationRelayKerberosInstanceOper#start_time}
  */
  readonly startTime?: string;
}

export function dataThunderAamAuthenticationRelayKerberosInstanceOperOperItemListStructToTerraform(struct?: DataThunderAamAuthenticationRelayKerberosInstanceOperOperItemListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_principal: cdktf.stringToTerraform(struct!.clientPrincipal),
    end_time: cdktf.stringToTerraform(struct!.endTime),
    flags: cdktf.stringToTerraform(struct!.flags),
    renew_time: cdktf.stringToTerraform(struct!.renewTime),
    service_principal: cdktf.stringToTerraform(struct!.servicePrincipal),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


export function dataThunderAamAuthenticationRelayKerberosInstanceOperOperItemListStructToHclTerraform(struct?: DataThunderAamAuthenticationRelayKerberosInstanceOperOperItemListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_principal: {
      value: cdktf.stringToHclTerraform(struct!.clientPrincipal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flags: {
      value: cdktf.stringToHclTerraform(struct!.flags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    renew_time: {
      value: cdktf.stringToHclTerraform(struct!.renewTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_principal: {
      value: cdktf.stringToHclTerraform(struct!.servicePrincipal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamAuthenticationRelayKerberosInstanceOperOperItemListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderAamAuthenticationRelayKerberosInstanceOperOperItemListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientPrincipal !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientPrincipal = this._clientPrincipal;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._flags !== undefined) {
      hasAnyValues = true;
      internalValueResult.flags = this._flags;
    }
    if (this._renewTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.renewTime = this._renewTime;
    }
    if (this._servicePrincipal !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePrincipal = this._servicePrincipal;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamAuthenticationRelayKerberosInstanceOperOperItemListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientPrincipal = undefined;
      this._endTime = undefined;
      this._flags = undefined;
      this._renewTime = undefined;
      this._servicePrincipal = undefined;
      this._startTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientPrincipal = value.clientPrincipal;
      this._endTime = value.endTime;
      this._flags = value.flags;
      this._renewTime = value.renewTime;
      this._servicePrincipal = value.servicePrincipal;
      this._startTime = value.startTime;
    }
  }

  // client_principal - computed: false, optional: true, required: false
  private _clientPrincipal?: string; 
  public get clientPrincipal() {
    return this.getStringAttribute('client_principal');
  }
  public set clientPrincipal(value: string) {
    this._clientPrincipal = value;
  }
  public resetClientPrincipal() {
    this._clientPrincipal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientPrincipalInput() {
    return this._clientPrincipal;
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // flags - computed: false, optional: true, required: false
  private _flags?: string; 
  public get flags() {
    return this.getStringAttribute('flags');
  }
  public set flags(value: string) {
    this._flags = value;
  }
  public resetFlags() {
    this._flags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flagsInput() {
    return this._flags;
  }

  // renew_time - computed: false, optional: true, required: false
  private _renewTime?: string; 
  public get renewTime() {
    return this.getStringAttribute('renew_time');
  }
  public set renewTime(value: string) {
    this._renewTime = value;
  }
  public resetRenewTime() {
    this._renewTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewTimeInput() {
    return this._renewTime;
  }

  // service_principal - computed: false, optional: true, required: false
  private _servicePrincipal?: string; 
  public get servicePrincipal() {
    return this.getStringAttribute('service_principal');
  }
  public set servicePrincipal(value: string) {
    this._servicePrincipal = value;
  }
  public resetServicePrincipal() {
    this._servicePrincipal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrincipalInput() {
    return this._servicePrincipal;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}

export class DataThunderAamAuthenticationRelayKerberosInstanceOperOperItemListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderAamAuthenticationRelayKerberosInstanceOperOperItemListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderAamAuthenticationRelayKerberosInstanceOperOperItemListStructOutputReference {
    return new DataThunderAamAuthenticationRelayKerberosInstanceOperOperItemListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderAamAuthenticationRelayKerberosInstanceOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_kerberos_instance_oper#default_principal DataThunderAamAuthenticationRelayKerberosInstanceOper#default_principal}
  */
  readonly defaultPrincipal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_kerberos_instance_oper#ticket_cache DataThunderAamAuthenticationRelayKerberosInstanceOper#ticket_cache}
  */
  readonly ticketCache?: string;
  /**
  * item_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_kerberos_instance_oper#item_list DataThunderAamAuthenticationRelayKerberosInstanceOper#item_list}
  */
  readonly itemList?: DataThunderAamAuthenticationRelayKerberosInstanceOperOperItemListStruct[] | cdktf.IResolvable;
}

export function dataThunderAamAuthenticationRelayKerberosInstanceOperOperToTerraform(struct?: DataThunderAamAuthenticationRelayKerberosInstanceOperOperOutputReference | DataThunderAamAuthenticationRelayKerberosInstanceOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_principal: cdktf.stringToTerraform(struct!.defaultPrincipal),
    ticket_cache: cdktf.stringToTerraform(struct!.ticketCache),
    item_list: cdktf.listMapper(dataThunderAamAuthenticationRelayKerberosInstanceOperOperItemListStructToTerraform, true)(struct!.itemList),
  }
}


export function dataThunderAamAuthenticationRelayKerberosInstanceOperOperToHclTerraform(struct?: DataThunderAamAuthenticationRelayKerberosInstanceOperOperOutputReference | DataThunderAamAuthenticationRelayKerberosInstanceOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_principal: {
      value: cdktf.stringToHclTerraform(struct!.defaultPrincipal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ticket_cache: {
      value: cdktf.stringToHclTerraform(struct!.ticketCache),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    item_list: {
      value: cdktf.listMapperHcl(dataThunderAamAuthenticationRelayKerberosInstanceOperOperItemListStructToHclTerraform, true)(struct!.itemList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderAamAuthenticationRelayKerberosInstanceOperOperItemListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamAuthenticationRelayKerberosInstanceOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderAamAuthenticationRelayKerberosInstanceOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultPrincipal !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultPrincipal = this._defaultPrincipal;
    }
    if (this._ticketCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.ticketCache = this._ticketCache;
    }
    if (this._itemList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.itemList = this._itemList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamAuthenticationRelayKerberosInstanceOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultPrincipal = undefined;
      this._ticketCache = undefined;
      this._itemList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultPrincipal = value.defaultPrincipal;
      this._ticketCache = value.ticketCache;
      this._itemList.internalValue = value.itemList;
    }
  }

  // default_principal - computed: false, optional: true, required: false
  private _defaultPrincipal?: string; 
  public get defaultPrincipal() {
    return this.getStringAttribute('default_principal');
  }
  public set defaultPrincipal(value: string) {
    this._defaultPrincipal = value;
  }
  public resetDefaultPrincipal() {
    this._defaultPrincipal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPrincipalInput() {
    return this._defaultPrincipal;
  }

  // ticket_cache - computed: false, optional: true, required: false
  private _ticketCache?: string; 
  public get ticketCache() {
    return this.getStringAttribute('ticket_cache');
  }
  public set ticketCache(value: string) {
    this._ticketCache = value;
  }
  public resetTicketCache() {
    this._ticketCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ticketCacheInput() {
    return this._ticketCache;
  }

  // item_list - computed: false, optional: true, required: false
  private _itemList = new DataThunderAamAuthenticationRelayKerberosInstanceOperOperItemListStructList(this, "item_list", false);
  public get itemList() {
    return this._itemList;
  }
  public putItemList(value: DataThunderAamAuthenticationRelayKerberosInstanceOperOperItemListStruct[] | cdktf.IResolvable) {
    this._itemList.internalValue = value;
  }
  public resetItemList() {
    this._itemList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemListInput() {
    return this._itemList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_kerberos_instance_oper thunder_aam_authentication_relay_kerberos_instance_oper}
*/
export class DataThunderAamAuthenticationRelayKerberosInstanceOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_authentication_relay_kerberos_instance_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderAamAuthenticationRelayKerberosInstanceOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderAamAuthenticationRelayKerberosInstanceOper to import
  * @param importFromId The id of the existing DataThunderAamAuthenticationRelayKerberosInstanceOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_kerberos_instance_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderAamAuthenticationRelayKerberosInstanceOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_authentication_relay_kerberos_instance_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_kerberos_instance_oper thunder_aam_authentication_relay_kerberos_instance_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderAamAuthenticationRelayKerberosInstanceOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderAamAuthenticationRelayKerberosInstanceOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_authentication_relay_kerberos_instance_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
    this._name = config.name;
    this._oper.internalValue = config.oper;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderAamAuthenticationRelayKerberosInstanceOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderAamAuthenticationRelayKerberosInstanceOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      oper: dataThunderAamAuthenticationRelayKerberosInstanceOperOperToTerraform(this._oper.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oper: {
        value: dataThunderAamAuthenticationRelayKerberosInstanceOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderAamAuthenticationRelayKerberosInstanceOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
