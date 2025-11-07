// https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/dataset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatasetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/dataset#export_type Dataset#export_type}
  */
  readonly exportType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/dataset#name Dataset#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/dataset#recipient_emails Dataset#recipient_emails}
  */
  readonly recipientEmails?: string[];
  /**
  * datatype block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/dataset#datatype Dataset#datatype}
  */
  readonly datatype: DatasetDatatype;
  /**
  * repeat block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/dataset#repeat Dataset#repeat}
  */
  readonly repeat?: DatasetRepeat;
  /**
  * timeframe block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/dataset#timeframe Dataset#timeframe}
  */
  readonly timeframe: DatasetTimeframe;
}
export interface DatasetReports {
}

export function datasetReportsToTerraform(struct?: DatasetReports): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function datasetReportsToHclTerraform(struct?: DatasetReports): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatasetReportsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatasetReports | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasetReports | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }

  // end - computed: true, optional: false, required: false
  public get end() {
    return this.getNumberAttribute('end');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // start - computed: true, optional: false, required: false
  public get start() {
    return this.getNumberAttribute('start');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DatasetReportsList extends cdktf.ComplexList {

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
  public get(index: number): DatasetReportsOutputReference {
    return new DatasetReportsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatasetDatatype {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/dataset#data Dataset#data}
  */
  readonly data: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/dataset#scope Dataset#scope}
  */
  readonly scope: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/dataset#type Dataset#type}
  */
  readonly type: string;
}

export function datasetDatatypeToTerraform(struct?: DatasetDatatypeOutputReference | DatasetDatatype): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.data),
    scope: cdktf.stringToTerraform(struct!.scope),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function datasetDatatypeToHclTerraform(struct?: DatasetDatatypeOutputReference | DatasetDatatype): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.data),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasetDatatypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasetDatatype | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasetDatatype | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._data = undefined;
      this._scope = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._data = value.data;
      this._scope = value.scope;
      this._type = value.type;
    }
  }

  // data - computed: false, optional: false, required: true
  private _data?: { [key: string]: string }; 
  public get data() {
    return this.getStringMapAttribute('data');
  }
  public set data(value: { [key: string]: string }) {
    this._data = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DatasetRepeat {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/dataset#end_after_n Dataset#end_after_n}
  */
  readonly endAfterN: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/dataset#repeats_every Dataset#repeats_every}
  */
  readonly repeatsEvery: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/dataset#start Dataset#start}
  */
  readonly start: number;
}

export function datasetRepeatToTerraform(struct?: DatasetRepeatOutputReference | DatasetRepeat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_after_n: cdktf.numberToTerraform(struct!.endAfterN),
    repeats_every: cdktf.stringToTerraform(struct!.repeatsEvery),
    start: cdktf.numberToTerraform(struct!.start),
  }
}


export function datasetRepeatToHclTerraform(struct?: DatasetRepeatOutputReference | DatasetRepeat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_after_n: {
      value: cdktf.numberToHclTerraform(struct!.endAfterN),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    repeats_every: {
      value: cdktf.stringToHclTerraform(struct!.repeatsEvery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.numberToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasetRepeatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasetRepeat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endAfterN !== undefined) {
      hasAnyValues = true;
      internalValueResult.endAfterN = this._endAfterN;
    }
    if (this._repeatsEvery !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeatsEvery = this._repeatsEvery;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasetRepeat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endAfterN = undefined;
      this._repeatsEvery = undefined;
      this._start = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endAfterN = value.endAfterN;
      this._repeatsEvery = value.repeatsEvery;
      this._start = value.start;
    }
  }

  // end_after_n - computed: false, optional: false, required: true
  private _endAfterN?: number; 
  public get endAfterN() {
    return this.getNumberAttribute('end_after_n');
  }
  public set endAfterN(value: number) {
    this._endAfterN = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endAfterNInput() {
    return this._endAfterN;
  }

  // repeats_every - computed: false, optional: false, required: true
  private _repeatsEvery?: string; 
  public get repeatsEvery() {
    return this.getStringAttribute('repeats_every');
  }
  public set repeatsEvery(value: string) {
    this._repeatsEvery = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatsEveryInput() {
    return this._repeatsEvery;
  }

  // start - computed: false, optional: false, required: true
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}
export interface DatasetTimeframe {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/dataset#aggregation Dataset#aggregation}
  */
  readonly aggregation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/dataset#cycles Dataset#cycles}
  */
  readonly cycles?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/dataset#from Dataset#from}
  */
  readonly from?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/dataset#to Dataset#to}
  */
  readonly to?: number;
}

export function datasetTimeframeToTerraform(struct?: DatasetTimeframeOutputReference | DatasetTimeframe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    cycles: cdktf.numberToTerraform(struct!.cycles),
    from: cdktf.numberToTerraform(struct!.from),
    to: cdktf.numberToTerraform(struct!.to),
  }
}


export function datasetTimeframeToHclTerraform(struct?: DatasetTimeframeOutputReference | DatasetTimeframe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregation: {
      value: cdktf.stringToHclTerraform(struct!.aggregation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cycles: {
      value: cdktf.numberToHclTerraform(struct!.cycles),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    from: {
      value: cdktf.numberToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    to: {
      value: cdktf.numberToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasetTimeframeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasetTimeframe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._cycles !== undefined) {
      hasAnyValues = true;
      internalValueResult.cycles = this._cycles;
    }
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasetTimeframe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._cycles = undefined;
      this._from = undefined;
      this._to = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._cycles = value.cycles;
      this._from = value.from;
      this._to = value.to;
    }
  }

  // aggregation - computed: false, optional: false, required: true
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // cycles - computed: false, optional: true, required: false
  private _cycles?: number; 
  public get cycles() {
    return this.getNumberAttribute('cycles');
  }
  public set cycles(value: number) {
    this._cycles = value;
  }
  public resetCycles() {
    this._cycles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cyclesInput() {
    return this._cycles;
  }

  // from - computed: false, optional: true, required: false
  private _from?: number; 
  public get from() {
    return this.getNumberAttribute('from');
  }
  public set from(value: number) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // to - computed: false, optional: true, required: false
  private _to?: number; 
  public get to() {
    return this.getNumberAttribute('to');
  }
  public set to(value: number) {
    this._to = value;
  }
  public resetTo() {
    this._to = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/dataset ns1_dataset}
*/
export class Dataset extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ns1_dataset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Dataset resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Dataset to import
  * @param importFromId The id of the existing Dataset that should be imported. Refer to the {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/dataset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Dataset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ns1_dataset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/dataset ns1_dataset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatasetConfig
  */
  public constructor(scope: Construct, id: string, config: DatasetConfig) {
    super(scope, id, {
      terraformResourceType: 'ns1_dataset',
      terraformGeneratorMetadata: {
        providerName: 'ns1',
        providerVersion: '2.7.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._exportType = config.exportType;
    this._name = config.name;
    this._recipientEmails = config.recipientEmails;
    this._datatype.internalValue = config.datatype;
    this._repeat.internalValue = config.repeat;
    this._timeframe.internalValue = config.timeframe;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // export_type - computed: false, optional: false, required: true
  private _exportType?: string; 
  public get exportType() {
    return this.getStringAttribute('export_type');
  }
  public set exportType(value: string) {
    this._exportType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exportTypeInput() {
    return this._exportType;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // recipient_emails - computed: false, optional: true, required: false
  private _recipientEmails?: string[]; 
  public get recipientEmails() {
    return cdktf.Fn.tolist(this.getListAttribute('recipient_emails'));
  }
  public set recipientEmails(value: string[]) {
    this._recipientEmails = value;
  }
  public resetRecipientEmails() {
    this._recipientEmails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientEmailsInput() {
    return this._recipientEmails;
  }

  // reports - computed: true, optional: false, required: false
  private _reports = new DatasetReportsList(this, "reports", false);
  public get reports() {
    return this._reports;
  }

  // datatype - computed: false, optional: false, required: true
  private _datatype = new DatasetDatatypeOutputReference(this, "datatype");
  public get datatype() {
    return this._datatype;
  }
  public putDatatype(value: DatasetDatatype) {
    this._datatype.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datatypeInput() {
    return this._datatype.internalValue;
  }

  // repeat - computed: false, optional: true, required: false
  private _repeat = new DatasetRepeatOutputReference(this, "repeat");
  public get repeat() {
    return this._repeat;
  }
  public putRepeat(value: DatasetRepeat) {
    this._repeat.internalValue = value;
  }
  public resetRepeat() {
    this._repeat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatInput() {
    return this._repeat.internalValue;
  }

  // timeframe - computed: false, optional: false, required: true
  private _timeframe = new DatasetTimeframeOutputReference(this, "timeframe");
  public get timeframe() {
    return this._timeframe;
  }
  public putTimeframe(value: DatasetTimeframe) {
    this._timeframe.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeframeInput() {
    return this._timeframe.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      export_type: cdktf.stringToTerraform(this._exportType),
      name: cdktf.stringToTerraform(this._name),
      recipient_emails: cdktf.listMapper(cdktf.stringToTerraform, false)(this._recipientEmails),
      datatype: datasetDatatypeToTerraform(this._datatype.internalValue),
      repeat: datasetRepeatToTerraform(this._repeat.internalValue),
      timeframe: datasetTimeframeToTerraform(this._timeframe.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      export_type: {
        value: cdktf.stringToHclTerraform(this._exportType),
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
      recipient_emails: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._recipientEmails),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      datatype: {
        value: datasetDatatypeToHclTerraform(this._datatype.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatasetDatatypeList",
      },
      repeat: {
        value: datasetRepeatToHclTerraform(this._repeat.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatasetRepeatList",
      },
      timeframe: {
        value: datasetTimeframeToHclTerraform(this._timeframe.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatasetTimeframeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
