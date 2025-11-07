// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_ocsp_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbSslOcspOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_ocsp_oper#id DataThunderSlbSslOcspOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_ocsp_oper#oper DataThunderSlbSslOcspOper#oper}
  */
  readonly oper?: DataThunderSlbSslOcspOperOper;
}
export interface DataThunderSlbSslOcspOperOperCachedEntries {
  /**
  * Cert Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_ocsp_oper#expire DataThunderSlbSslOcspOper#expire}
  */
  readonly expire?: number;
  /**
  * Cert Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_ocsp_oper#hits DataThunderSlbSslOcspOper#hits}
  */
  readonly hits?: number;
  /**
  * Cert Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_ocsp_oper#length DataThunderSlbSslOcspOper#length}
  */
  readonly length?: number;
  /**
  * Cert Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_ocsp_oper#name DataThunderSlbSslOcspOper#name}
  */
  readonly name?: string;
  /**
  * Cert Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_ocsp_oper#status DataThunderSlbSslOcspOper#status}
  */
  readonly status?: string;
  /**
  * Cert Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_ocsp_oper#subject DataThunderSlbSslOcspOper#subject}
  */
  readonly subject?: string;
  /**
  * Cert Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_ocsp_oper#uri DataThunderSlbSslOcspOper#uri}
  */
  readonly uri?: string;
}

export function dataThunderSlbSslOcspOperOperCachedEntriesToTerraform(struct?: DataThunderSlbSslOcspOperOperCachedEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expire: cdktf.numberToTerraform(struct!.expire),
    hits: cdktf.numberToTerraform(struct!.hits),
    length: cdktf.numberToTerraform(struct!.length),
    name: cdktf.stringToTerraform(struct!.name),
    status: cdktf.stringToTerraform(struct!.status),
    subject: cdktf.stringToTerraform(struct!.subject),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function dataThunderSlbSslOcspOperOperCachedEntriesToHclTerraform(struct?: DataThunderSlbSslOcspOperOperCachedEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expire: {
      value: cdktf.numberToHclTerraform(struct!.expire),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hits: {
      value: cdktf.numberToHclTerraform(struct!.hits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbSslOcspOperOperCachedEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbSslOcspOperOperCachedEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expire !== undefined) {
      hasAnyValues = true;
      internalValueResult.expire = this._expire;
    }
    if (this._hits !== undefined) {
      hasAnyValues = true;
      internalValueResult.hits = this._hits;
    }
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbSslOcspOperOperCachedEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expire = undefined;
      this._hits = undefined;
      this._length = undefined;
      this._name = undefined;
      this._status = undefined;
      this._subject = undefined;
      this._uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expire = value.expire;
      this._hits = value.hits;
      this._length = value.length;
      this._name = value.name;
      this._status = value.status;
      this._subject = value.subject;
      this._uri = value.uri;
    }
  }

  // expire - computed: false, optional: true, required: false
  private _expire?: number; 
  public get expire() {
    return this.getNumberAttribute('expire');
  }
  public set expire(value: number) {
    this._expire = value;
  }
  public resetExpire() {
    this._expire = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireInput() {
    return this._expire;
  }

  // hits - computed: false, optional: true, required: false
  private _hits?: number; 
  public get hits() {
    return this.getNumberAttribute('hits');
  }
  public set hits(value: number) {
    this._hits = value;
  }
  public resetHits() {
    this._hits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hitsInput() {
    return this._hits;
  }

  // length - computed: false, optional: true, required: false
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  public resetLength() {
    this._length = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // subject - computed: false, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // uri - computed: false, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}

export class DataThunderSlbSslOcspOperOperCachedEntriesList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbSslOcspOperOperCachedEntries[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbSslOcspOperOperCachedEntriesOutputReference {
    return new DataThunderSlbSslOcspOperOperCachedEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbSslOcspOperOper {
  /**
  * Total Entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_ocsp_oper#total_entries DataThunderSlbSslOcspOper#total_entries}
  */
  readonly totalEntries?: number;
  /**
  * cached_entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_ocsp_oper#cached_entries DataThunderSlbSslOcspOper#cached_entries}
  */
  readonly cachedEntries?: DataThunderSlbSslOcspOperOperCachedEntries[] | cdktf.IResolvable;
}

export function dataThunderSlbSslOcspOperOperToTerraform(struct?: DataThunderSlbSslOcspOperOperOutputReference | DataThunderSlbSslOcspOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    total_entries: cdktf.numberToTerraform(struct!.totalEntries),
    cached_entries: cdktf.listMapper(dataThunderSlbSslOcspOperOperCachedEntriesToTerraform, true)(struct!.cachedEntries),
  }
}


export function dataThunderSlbSslOcspOperOperToHclTerraform(struct?: DataThunderSlbSslOcspOperOperOutputReference | DataThunderSlbSslOcspOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    total_entries: {
      value: cdktf.numberToHclTerraform(struct!.totalEntries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cached_entries: {
      value: cdktf.listMapperHcl(dataThunderSlbSslOcspOperOperCachedEntriesToHclTerraform, true)(struct!.cachedEntries),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbSslOcspOperOperCachedEntriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbSslOcspOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbSslOcspOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._totalEntries !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalEntries = this._totalEntries;
    }
    if (this._cachedEntries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachedEntries = this._cachedEntries?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbSslOcspOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._totalEntries = undefined;
      this._cachedEntries.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._totalEntries = value.totalEntries;
      this._cachedEntries.internalValue = value.cachedEntries;
    }
  }

  // total_entries - computed: false, optional: true, required: false
  private _totalEntries?: number; 
  public get totalEntries() {
    return this.getNumberAttribute('total_entries');
  }
  public set totalEntries(value: number) {
    this._totalEntries = value;
  }
  public resetTotalEntries() {
    this._totalEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalEntriesInput() {
    return this._totalEntries;
  }

  // cached_entries - computed: false, optional: true, required: false
  private _cachedEntries = new DataThunderSlbSslOcspOperOperCachedEntriesList(this, "cached_entries", false);
  public get cachedEntries() {
    return this._cachedEntries;
  }
  public putCachedEntries(value: DataThunderSlbSslOcspOperOperCachedEntries[] | cdktf.IResolvable) {
    this._cachedEntries.internalValue = value;
  }
  public resetCachedEntries() {
    this._cachedEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachedEntriesInput() {
    return this._cachedEntries.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_ocsp_oper thunder_slb_ssl_ocsp_oper}
*/
export class DataThunderSlbSslOcspOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_ssl_ocsp_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbSslOcspOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbSslOcspOper to import
  * @param importFromId The id of the existing DataThunderSlbSslOcspOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_ocsp_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbSslOcspOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_ssl_ocsp_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_ocsp_oper thunder_slb_ssl_ocsp_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbSslOcspOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbSslOcspOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_ssl_ocsp_oper',
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderSlbSslOcspOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbSslOcspOperOper) {
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
      oper: dataThunderSlbSslOcspOperOperToTerraform(this._oper.internalValue),
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
      oper: {
        value: dataThunderSlbSslOcspOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbSslOcspOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
