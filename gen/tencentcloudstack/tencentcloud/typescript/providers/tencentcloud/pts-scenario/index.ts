// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PtsScenarioConfig extends cdktf.TerraformMetaArguments {
  /**
  * cron job ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#cron_id PtsScenario#cron_id}
  */
  readonly cronId?: string;
  /**
  * Pts Scenario Description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#description PtsScenario#description}
  */
  readonly description?: string;
  /**
  * deprecated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#extensions PtsScenario#extensions}
  */
  readonly extensions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#id PtsScenario#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Pts Scenario name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#name PtsScenario#name}
  */
  readonly name: string;
  /**
  * Project id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#project_id PtsScenario#project_id}
  */
  readonly projectId: string;
  /**
  * Pressure test engine type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#type PtsScenario#type}
  */
  readonly type: string;
  /**
  * datasets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#datasets PtsScenario#datasets}
  */
  readonly datasets?: PtsScenarioDatasets[] | cdktf.IResolvable;
  /**
  * domain_name_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#domain_name_config PtsScenario#domain_name_config}
  */
  readonly domainNameConfig?: PtsScenarioDomainNameConfig;
  /**
  * load block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#load PtsScenario#load}
  */
  readonly load?: PtsScenarioLoad;
  /**
  * plugins block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#plugins PtsScenario#plugins}
  */
  readonly plugins?: PtsScenarioPlugins[] | cdktf.IResolvable;
  /**
  * protocols block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#protocols PtsScenario#protocols}
  */
  readonly protocols?: PtsScenarioProtocols[] | cdktf.IResolvable;
  /**
  * request_files block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#request_files PtsScenario#request_files}
  */
  readonly requestFiles?: PtsScenarioRequestFiles[] | cdktf.IResolvable;
  /**
  * sla_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#sla_policy PtsScenario#sla_policy}
  */
  readonly slaPolicy?: PtsScenarioSlaPolicy;
  /**
  * test_scripts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#test_scripts PtsScenario#test_scripts}
  */
  readonly testScripts?: PtsScenarioTestScripts[] | cdktf.IResolvable;
}
export interface PtsScenarioDatasets {
  /**
  * File ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#file_id PtsScenario#file_id}
  */
  readonly fileId?: string;
  /**
  * Header data row.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#head_lines PtsScenario#head_lines}
  */
  readonly headLines?: string[];
  /**
  * Parameter name array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#header_columns PtsScenario#header_columns}
  */
  readonly headerColumns?: string[];
  /**
  * Whether the first line is the parameter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#header_in_file PtsScenario#header_in_file}
  */
  readonly headerInFile: boolean | cdktf.IResolvable;
  /**
  * Number of file lines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#line_count PtsScenario#line_count}
  */
  readonly lineCount?: number;
  /**
  * The file name where the test dataset is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#name PtsScenario#name}
  */
  readonly name: string;
  /**
  * Number of file bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#size PtsScenario#size}
  */
  readonly size?: number;
  /**
  * Test whether the dataset is fragmented.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#split PtsScenario#split}
  */
  readonly split: boolean | cdktf.IResolvable;
  /**
  * Trailing data row.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#tail_lines PtsScenario#tail_lines}
  */
  readonly tailLines?: string[];
  /**
  * File type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#type PtsScenario#type}
  */
  readonly type?: string;
  /**
  * Update time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#updated_at PtsScenario#updated_at}
  */
  readonly updatedAt?: string;
}

export function ptsScenarioDatasetsToTerraform(struct?: PtsScenarioDatasets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_id: cdktf.stringToTerraform(struct!.fileId),
    head_lines: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headLines),
    header_columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headerColumns),
    header_in_file: cdktf.booleanToTerraform(struct!.headerInFile),
    line_count: cdktf.numberToTerraform(struct!.lineCount),
    name: cdktf.stringToTerraform(struct!.name),
    size: cdktf.numberToTerraform(struct!.size),
    split: cdktf.booleanToTerraform(struct!.split),
    tail_lines: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tailLines),
    type: cdktf.stringToTerraform(struct!.type),
    updated_at: cdktf.stringToTerraform(struct!.updatedAt),
  }
}


export function ptsScenarioDatasetsToHclTerraform(struct?: PtsScenarioDatasets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_id: {
      value: cdktf.stringToHclTerraform(struct!.fileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    head_lines: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.headLines),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    header_columns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.headerColumns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    header_in_file: {
      value: cdktf.booleanToHclTerraform(struct!.headerInFile),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    line_count: {
      value: cdktf.numberToHclTerraform(struct!.lineCount),
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
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    split: {
      value: cdktf.booleanToHclTerraform(struct!.split),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tail_lines: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tailLines),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    updated_at: {
      value: cdktf.stringToHclTerraform(struct!.updatedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PtsScenarioDatasetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PtsScenarioDatasets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileId = this._fileId;
    }
    if (this._headLines !== undefined) {
      hasAnyValues = true;
      internalValueResult.headLines = this._headLines;
    }
    if (this._headerColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerColumns = this._headerColumns;
    }
    if (this._headerInFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerInFile = this._headerInFile;
    }
    if (this._lineCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineCount = this._lineCount;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._split !== undefined) {
      hasAnyValues = true;
      internalValueResult.split = this._split;
    }
    if (this._tailLines !== undefined) {
      hasAnyValues = true;
      internalValueResult.tailLines = this._tailLines;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._updatedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedAt = this._updatedAt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PtsScenarioDatasets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileId = undefined;
      this._headLines = undefined;
      this._headerColumns = undefined;
      this._headerInFile = undefined;
      this._lineCount = undefined;
      this._name = undefined;
      this._size = undefined;
      this._split = undefined;
      this._tailLines = undefined;
      this._type = undefined;
      this._updatedAt = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileId = value.fileId;
      this._headLines = value.headLines;
      this._headerColumns = value.headerColumns;
      this._headerInFile = value.headerInFile;
      this._lineCount = value.lineCount;
      this._name = value.name;
      this._size = value.size;
      this._split = value.split;
      this._tailLines = value.tailLines;
      this._type = value.type;
      this._updatedAt = value.updatedAt;
    }
  }

  // file_id - computed: false, optional: true, required: false
  private _fileId?: string; 
  public get fileId() {
    return this.getStringAttribute('file_id');
  }
  public set fileId(value: string) {
    this._fileId = value;
  }
  public resetFileId() {
    this._fileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileIdInput() {
    return this._fileId;
  }

  // head_lines - computed: false, optional: true, required: false
  private _headLines?: string[]; 
  public get headLines() {
    return cdktf.Fn.tolist(this.getListAttribute('head_lines'));
  }
  public set headLines(value: string[]) {
    this._headLines = value;
  }
  public resetHeadLines() {
    this._headLines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headLinesInput() {
    return this._headLines;
  }

  // header_columns - computed: false, optional: true, required: false
  private _headerColumns?: string[]; 
  public get headerColumns() {
    return cdktf.Fn.tolist(this.getListAttribute('header_columns'));
  }
  public set headerColumns(value: string[]) {
    this._headerColumns = value;
  }
  public resetHeaderColumns() {
    this._headerColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerColumnsInput() {
    return this._headerColumns;
  }

  // header_in_file - computed: false, optional: false, required: true
  private _headerInFile?: boolean | cdktf.IResolvable; 
  public get headerInFile() {
    return this.getBooleanAttribute('header_in_file');
  }
  public set headerInFile(value: boolean | cdktf.IResolvable) {
    this._headerInFile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInFileInput() {
    return this._headerInFile;
  }

  // line_count - computed: false, optional: true, required: false
  private _lineCount?: number; 
  public get lineCount() {
    return this.getNumberAttribute('line_count');
  }
  public set lineCount(value: number) {
    this._lineCount = value;
  }
  public resetLineCount() {
    this._lineCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineCountInput() {
    return this._lineCount;
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

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // split - computed: false, optional: false, required: true
  private _split?: boolean | cdktf.IResolvable; 
  public get split() {
    return this.getBooleanAttribute('split');
  }
  public set split(value: boolean | cdktf.IResolvable) {
    this._split = value;
  }
  // Temporarily expose input value. Use with caution.
  public get splitInput() {
    return this._split;
  }

  // tail_lines - computed: false, optional: true, required: false
  private _tailLines?: string[]; 
  public get tailLines() {
    return cdktf.Fn.tolist(this.getListAttribute('tail_lines'));
  }
  public set tailLines(value: string[]) {
    this._tailLines = value;
  }
  public resetTailLines() {
    this._tailLines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tailLinesInput() {
    return this._tailLines;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // updated_at - computed: false, optional: true, required: false
  private _updatedAt?: string; 
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
  public set updatedAt(value: string) {
    this._updatedAt = value;
  }
  public resetUpdatedAt() {
    this._updatedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt;
  }
}

export class PtsScenarioDatasetsList extends cdktf.ComplexList {
  public internalValue? : PtsScenarioDatasets[] | cdktf.IResolvable

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
  public get(index: number): PtsScenarioDatasetsOutputReference {
    return new PtsScenarioDatasetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PtsScenarioDomainNameConfigDnsConfig {
  /**
  * DNS IP List.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#nameservers PtsScenario#nameservers}
  */
  readonly nameservers?: string[];
}

export function ptsScenarioDomainNameConfigDnsConfigToTerraform(struct?: PtsScenarioDomainNameConfigDnsConfigOutputReference | PtsScenarioDomainNameConfigDnsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nameservers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nameservers),
  }
}


export function ptsScenarioDomainNameConfigDnsConfigToHclTerraform(struct?: PtsScenarioDomainNameConfigDnsConfigOutputReference | PtsScenarioDomainNameConfigDnsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nameservers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nameservers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PtsScenarioDomainNameConfigDnsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PtsScenarioDomainNameConfigDnsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nameservers !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameservers = this._nameservers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PtsScenarioDomainNameConfigDnsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nameservers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nameservers = value.nameservers;
    }
  }

  // nameservers - computed: false, optional: true, required: false
  private _nameservers?: string[]; 
  public get nameservers() {
    return cdktf.Fn.tolist(this.getListAttribute('nameservers'));
  }
  public set nameservers(value: string[]) {
    this._nameservers = value;
  }
  public resetNameservers() {
    this._nameservers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserversInput() {
    return this._nameservers;
  }
}
export interface PtsScenarioDomainNameConfigHostAliases {
  /**
  * List of domain names to be bound.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#host_names PtsScenario#host_names}
  */
  readonly hostNames?: string[];
  /**
  * The IP address to be bound.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#ip PtsScenario#ip}
  */
  readonly ip?: string;
}

export function ptsScenarioDomainNameConfigHostAliasesToTerraform(struct?: PtsScenarioDomainNameConfigHostAliases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hostNames),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function ptsScenarioDomainNameConfigHostAliasesToHclTerraform(struct?: PtsScenarioDomainNameConfigHostAliases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hostNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PtsScenarioDomainNameConfigHostAliasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PtsScenarioDomainNameConfigHostAliases | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostNames = this._hostNames;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PtsScenarioDomainNameConfigHostAliases | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostNames = undefined;
      this._ip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostNames = value.hostNames;
      this._ip = value.ip;
    }
  }

  // host_names - computed: false, optional: true, required: false
  private _hostNames?: string[]; 
  public get hostNames() {
    return cdktf.Fn.tolist(this.getListAttribute('host_names'));
  }
  public set hostNames(value: string[]) {
    this._hostNames = value;
  }
  public resetHostNames() {
    this._hostNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNamesInput() {
    return this._hostNames;
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }
}

export class PtsScenarioDomainNameConfigHostAliasesList extends cdktf.ComplexList {
  public internalValue? : PtsScenarioDomainNameConfigHostAliases[] | cdktf.IResolvable

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
  public get(index: number): PtsScenarioDomainNameConfigHostAliasesOutputReference {
    return new PtsScenarioDomainNameConfigHostAliasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PtsScenarioDomainNameConfig {
  /**
  * dns_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#dns_config PtsScenario#dns_config}
  */
  readonly dnsConfig?: PtsScenarioDomainNameConfigDnsConfig;
  /**
  * host_aliases block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#host_aliases PtsScenario#host_aliases}
  */
  readonly hostAliases?: PtsScenarioDomainNameConfigHostAliases[] | cdktf.IResolvable;
}

export function ptsScenarioDomainNameConfigToTerraform(struct?: PtsScenarioDomainNameConfigOutputReference | PtsScenarioDomainNameConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_config: ptsScenarioDomainNameConfigDnsConfigToTerraform(struct!.dnsConfig),
    host_aliases: cdktf.listMapper(ptsScenarioDomainNameConfigHostAliasesToTerraform, true)(struct!.hostAliases),
  }
}


export function ptsScenarioDomainNameConfigToHclTerraform(struct?: PtsScenarioDomainNameConfigOutputReference | PtsScenarioDomainNameConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_config: {
      value: ptsScenarioDomainNameConfigDnsConfigToHclTerraform(struct!.dnsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "PtsScenarioDomainNameConfigDnsConfigList",
    },
    host_aliases: {
      value: cdktf.listMapperHcl(ptsScenarioDomainNameConfigHostAliasesToHclTerraform, true)(struct!.hostAliases),
      isBlock: true,
      type: "list",
      storageClassType: "PtsScenarioDomainNameConfigHostAliasesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PtsScenarioDomainNameConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PtsScenarioDomainNameConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsConfig = this._dnsConfig?.internalValue;
    }
    if (this._hostAliases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostAliases = this._hostAliases?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PtsScenarioDomainNameConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsConfig.internalValue = undefined;
      this._hostAliases.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsConfig.internalValue = value.dnsConfig;
      this._hostAliases.internalValue = value.hostAliases;
    }
  }

  // dns_config - computed: false, optional: true, required: false
  private _dnsConfig = new PtsScenarioDomainNameConfigDnsConfigOutputReference(this, "dns_config");
  public get dnsConfig() {
    return this._dnsConfig;
  }
  public putDnsConfig(value: PtsScenarioDomainNameConfigDnsConfig) {
    this._dnsConfig.internalValue = value;
  }
  public resetDnsConfig() {
    this._dnsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsConfigInput() {
    return this._dnsConfig.internalValue;
  }

  // host_aliases - computed: false, optional: true, required: false
  private _hostAliases = new PtsScenarioDomainNameConfigHostAliasesList(this, "host_aliases", false);
  public get hostAliases() {
    return this._hostAliases;
  }
  public putHostAliases(value: PtsScenarioDomainNameConfigHostAliases[] | cdktf.IResolvable) {
    this._hostAliases.internalValue = value;
  }
  public resetHostAliases() {
    this._hostAliases.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostAliasesInput() {
    return this._hostAliases.internalValue;
  }
}
export interface PtsScenarioLoadGeoRegionsLoadDistribution {
  /**
  * Percentage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#percentage PtsScenario#percentage}
  */
  readonly percentage?: number;
  /**
  * Region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#region PtsScenario#region}
  */
  readonly region?: string;
  /**
  * Regional ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#region_id PtsScenario#region_id}
  */
  readonly regionId: number;
}

export function ptsScenarioLoadGeoRegionsLoadDistributionToTerraform(struct?: PtsScenarioLoadGeoRegionsLoadDistribution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percentage: cdktf.numberToTerraform(struct!.percentage),
    region: cdktf.stringToTerraform(struct!.region),
    region_id: cdktf.numberToTerraform(struct!.regionId),
  }
}


export function ptsScenarioLoadGeoRegionsLoadDistributionToHclTerraform(struct?: PtsScenarioLoadGeoRegionsLoadDistribution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    percentage: {
      value: cdktf.numberToHclTerraform(struct!.percentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region_id: {
      value: cdktf.numberToHclTerraform(struct!.regionId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PtsScenarioLoadGeoRegionsLoadDistributionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PtsScenarioLoadGeoRegionsLoadDistribution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._regionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionId = this._regionId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PtsScenarioLoadGeoRegionsLoadDistribution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._percentage = undefined;
      this._region = undefined;
      this._regionId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._percentage = value.percentage;
      this._region = value.region;
      this._regionId = value.regionId;
    }
  }

  // percentage - computed: false, optional: true, required: false
  private _percentage?: number; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number) {
    this._percentage = value;
  }
  public resetPercentage() {
    this._percentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // region_id - computed: false, optional: false, required: true
  private _regionId?: number; 
  public get regionId() {
    return this.getNumberAttribute('region_id');
  }
  public set regionId(value: number) {
    this._regionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }
}

export class PtsScenarioLoadGeoRegionsLoadDistributionList extends cdktf.ComplexList {
  public internalValue? : PtsScenarioLoadGeoRegionsLoadDistribution[] | cdktf.IResolvable

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
  public get(index: number): PtsScenarioLoadGeoRegionsLoadDistributionOutputReference {
    return new PtsScenarioLoadGeoRegionsLoadDistributionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PtsScenarioLoadLoadSpecConcurrencyStages {
  /**
  * Pressure time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#duration_seconds PtsScenario#duration_seconds}
  */
  readonly durationSeconds?: number;
  /**
  * Number of virtual users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#target_virtual_users PtsScenario#target_virtual_users}
  */
  readonly targetVirtualUsers?: number;
}

export function ptsScenarioLoadLoadSpecConcurrencyStagesToTerraform(struct?: PtsScenarioLoadLoadSpecConcurrencyStages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration_seconds: cdktf.numberToTerraform(struct!.durationSeconds),
    target_virtual_users: cdktf.numberToTerraform(struct!.targetVirtualUsers),
  }
}


export function ptsScenarioLoadLoadSpecConcurrencyStagesToHclTerraform(struct?: PtsScenarioLoadLoadSpecConcurrencyStages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.durationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_virtual_users: {
      value: cdktf.numberToHclTerraform(struct!.targetVirtualUsers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PtsScenarioLoadLoadSpecConcurrencyStagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PtsScenarioLoadLoadSpecConcurrencyStages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._durationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationSeconds = this._durationSeconds;
    }
    if (this._targetVirtualUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetVirtualUsers = this._targetVirtualUsers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PtsScenarioLoadLoadSpecConcurrencyStages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._durationSeconds = undefined;
      this._targetVirtualUsers = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._durationSeconds = value.durationSeconds;
      this._targetVirtualUsers = value.targetVirtualUsers;
    }
  }

  // duration_seconds - computed: false, optional: true, required: false
  private _durationSeconds?: number; 
  public get durationSeconds() {
    return this.getNumberAttribute('duration_seconds');
  }
  public set durationSeconds(value: number) {
    this._durationSeconds = value;
  }
  public resetDurationSeconds() {
    this._durationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationSecondsInput() {
    return this._durationSeconds;
  }

  // target_virtual_users - computed: false, optional: true, required: false
  private _targetVirtualUsers?: number; 
  public get targetVirtualUsers() {
    return this.getNumberAttribute('target_virtual_users');
  }
  public set targetVirtualUsers(value: number) {
    this._targetVirtualUsers = value;
  }
  public resetTargetVirtualUsers() {
    this._targetVirtualUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetVirtualUsersInput() {
    return this._targetVirtualUsers;
  }
}

export class PtsScenarioLoadLoadSpecConcurrencyStagesList extends cdktf.ComplexList {
  public internalValue? : PtsScenarioLoadLoadSpecConcurrencyStages[] | cdktf.IResolvable

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
  public get(index: number): PtsScenarioLoadLoadSpecConcurrencyStagesOutputReference {
    return new PtsScenarioLoadLoadSpecConcurrencyStagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PtsScenarioLoadLoadSpecConcurrency {
  /**
  * Wait time for graceful termination of the task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#graceful_stop_seconds PtsScenario#graceful_stop_seconds}
  */
  readonly gracefulStopSeconds?: number;
  /**
  * Number of runs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#iteration_count PtsScenario#iteration_count}
  */
  readonly iterationCount?: number;
  /**
  * Maximum RPS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#max_requests_per_second PtsScenario#max_requests_per_second}
  */
  readonly maxRequestsPerSecond?: number;
  /**
  * stages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#stages PtsScenario#stages}
  */
  readonly stages?: PtsScenarioLoadLoadSpecConcurrencyStages[] | cdktf.IResolvable;
}

export function ptsScenarioLoadLoadSpecConcurrencyToTerraform(struct?: PtsScenarioLoadLoadSpecConcurrencyOutputReference | PtsScenarioLoadLoadSpecConcurrency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    graceful_stop_seconds: cdktf.numberToTerraform(struct!.gracefulStopSeconds),
    iteration_count: cdktf.numberToTerraform(struct!.iterationCount),
    max_requests_per_second: cdktf.numberToTerraform(struct!.maxRequestsPerSecond),
    stages: cdktf.listMapper(ptsScenarioLoadLoadSpecConcurrencyStagesToTerraform, true)(struct!.stages),
  }
}


export function ptsScenarioLoadLoadSpecConcurrencyToHclTerraform(struct?: PtsScenarioLoadLoadSpecConcurrencyOutputReference | PtsScenarioLoadLoadSpecConcurrency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    graceful_stop_seconds: {
      value: cdktf.numberToHclTerraform(struct!.gracefulStopSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    iteration_count: {
      value: cdktf.numberToHclTerraform(struct!.iterationCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_requests_per_second: {
      value: cdktf.numberToHclTerraform(struct!.maxRequestsPerSecond),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stages: {
      value: cdktf.listMapperHcl(ptsScenarioLoadLoadSpecConcurrencyStagesToHclTerraform, true)(struct!.stages),
      isBlock: true,
      type: "list",
      storageClassType: "PtsScenarioLoadLoadSpecConcurrencyStagesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PtsScenarioLoadLoadSpecConcurrencyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PtsScenarioLoadLoadSpecConcurrency | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gracefulStopSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracefulStopSeconds = this._gracefulStopSeconds;
    }
    if (this._iterationCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.iterationCount = this._iterationCount;
    }
    if (this._maxRequestsPerSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequestsPerSecond = this._maxRequestsPerSecond;
    }
    if (this._stages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stages = this._stages?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PtsScenarioLoadLoadSpecConcurrency | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gracefulStopSeconds = undefined;
      this._iterationCount = undefined;
      this._maxRequestsPerSecond = undefined;
      this._stages.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gracefulStopSeconds = value.gracefulStopSeconds;
      this._iterationCount = value.iterationCount;
      this._maxRequestsPerSecond = value.maxRequestsPerSecond;
      this._stages.internalValue = value.stages;
    }
  }

  // graceful_stop_seconds - computed: false, optional: true, required: false
  private _gracefulStopSeconds?: number; 
  public get gracefulStopSeconds() {
    return this.getNumberAttribute('graceful_stop_seconds');
  }
  public set gracefulStopSeconds(value: number) {
    this._gracefulStopSeconds = value;
  }
  public resetGracefulStopSeconds() {
    this._gracefulStopSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulStopSecondsInput() {
    return this._gracefulStopSeconds;
  }

  // iteration_count - computed: false, optional: true, required: false
  private _iterationCount?: number; 
  public get iterationCount() {
    return this.getNumberAttribute('iteration_count');
  }
  public set iterationCount(value: number) {
    this._iterationCount = value;
  }
  public resetIterationCount() {
    this._iterationCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iterationCountInput() {
    return this._iterationCount;
  }

  // max_requests_per_second - computed: false, optional: true, required: false
  private _maxRequestsPerSecond?: number; 
  public get maxRequestsPerSecond() {
    return this.getNumberAttribute('max_requests_per_second');
  }
  public set maxRequestsPerSecond(value: number) {
    this._maxRequestsPerSecond = value;
  }
  public resetMaxRequestsPerSecond() {
    this._maxRequestsPerSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestsPerSecondInput() {
    return this._maxRequestsPerSecond;
  }

  // stages - computed: false, optional: true, required: false
  private _stages = new PtsScenarioLoadLoadSpecConcurrencyStagesList(this, "stages", false);
  public get stages() {
    return this._stages;
  }
  public putStages(value: PtsScenarioLoadLoadSpecConcurrencyStages[] | cdktf.IResolvable) {
    this._stages.internalValue = value;
  }
  public resetStages() {
    this._stages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stagesInput() {
    return this._stages.internalValue;
  }
}
export interface PtsScenarioLoadLoadSpecRequestsPerSecond {
  /**
  * Pressure time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#duration_seconds PtsScenario#duration_seconds}
  */
  readonly durationSeconds?: number;
  /**
  * Elegant shutdown waiting time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#graceful_stop_seconds PtsScenario#graceful_stop_seconds}
  */
  readonly gracefulStopSeconds?: number;
  /**
  * Maximum RPS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#max_requests_per_second PtsScenario#max_requests_per_second}
  */
  readonly maxRequestsPerSecond?: number;
  /**
  * Number of resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#resources PtsScenario#resources}
  */
  readonly resources?: number;
  /**
  * Initial RPS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#start_requests_per_second PtsScenario#start_requests_per_second}
  */
  readonly startRequestsPerSecond?: number;
  /**
  * Target RPS, invalid input parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#target_requests_per_second PtsScenario#target_requests_per_second}
  */
  readonly targetRequestsPerSecond?: number;
}

export function ptsScenarioLoadLoadSpecRequestsPerSecondToTerraform(struct?: PtsScenarioLoadLoadSpecRequestsPerSecondOutputReference | PtsScenarioLoadLoadSpecRequestsPerSecond): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration_seconds: cdktf.numberToTerraform(struct!.durationSeconds),
    graceful_stop_seconds: cdktf.numberToTerraform(struct!.gracefulStopSeconds),
    max_requests_per_second: cdktf.numberToTerraform(struct!.maxRequestsPerSecond),
    resources: cdktf.numberToTerraform(struct!.resources),
    start_requests_per_second: cdktf.numberToTerraform(struct!.startRequestsPerSecond),
    target_requests_per_second: cdktf.numberToTerraform(struct!.targetRequestsPerSecond),
  }
}


export function ptsScenarioLoadLoadSpecRequestsPerSecondToHclTerraform(struct?: PtsScenarioLoadLoadSpecRequestsPerSecondOutputReference | PtsScenarioLoadLoadSpecRequestsPerSecond): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.durationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    graceful_stop_seconds: {
      value: cdktf.numberToHclTerraform(struct!.gracefulStopSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_requests_per_second: {
      value: cdktf.numberToHclTerraform(struct!.maxRequestsPerSecond),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resources: {
      value: cdktf.numberToHclTerraform(struct!.resources),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_requests_per_second: {
      value: cdktf.numberToHclTerraform(struct!.startRequestsPerSecond),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_requests_per_second: {
      value: cdktf.numberToHclTerraform(struct!.targetRequestsPerSecond),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PtsScenarioLoadLoadSpecRequestsPerSecondOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PtsScenarioLoadLoadSpecRequestsPerSecond | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._durationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationSeconds = this._durationSeconds;
    }
    if (this._gracefulStopSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracefulStopSeconds = this._gracefulStopSeconds;
    }
    if (this._maxRequestsPerSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequestsPerSecond = this._maxRequestsPerSecond;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    if (this._startRequestsPerSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.startRequestsPerSecond = this._startRequestsPerSecond;
    }
    if (this._targetRequestsPerSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRequestsPerSecond = this._targetRequestsPerSecond;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PtsScenarioLoadLoadSpecRequestsPerSecond | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._durationSeconds = undefined;
      this._gracefulStopSeconds = undefined;
      this._maxRequestsPerSecond = undefined;
      this._resources = undefined;
      this._startRequestsPerSecond = undefined;
      this._targetRequestsPerSecond = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._durationSeconds = value.durationSeconds;
      this._gracefulStopSeconds = value.gracefulStopSeconds;
      this._maxRequestsPerSecond = value.maxRequestsPerSecond;
      this._resources = value.resources;
      this._startRequestsPerSecond = value.startRequestsPerSecond;
      this._targetRequestsPerSecond = value.targetRequestsPerSecond;
    }
  }

  // duration_seconds - computed: false, optional: true, required: false
  private _durationSeconds?: number; 
  public get durationSeconds() {
    return this.getNumberAttribute('duration_seconds');
  }
  public set durationSeconds(value: number) {
    this._durationSeconds = value;
  }
  public resetDurationSeconds() {
    this._durationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationSecondsInput() {
    return this._durationSeconds;
  }

  // graceful_stop_seconds - computed: false, optional: true, required: false
  private _gracefulStopSeconds?: number; 
  public get gracefulStopSeconds() {
    return this.getNumberAttribute('graceful_stop_seconds');
  }
  public set gracefulStopSeconds(value: number) {
    this._gracefulStopSeconds = value;
  }
  public resetGracefulStopSeconds() {
    this._gracefulStopSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulStopSecondsInput() {
    return this._gracefulStopSeconds;
  }

  // max_requests_per_second - computed: false, optional: true, required: false
  private _maxRequestsPerSecond?: number; 
  public get maxRequestsPerSecond() {
    return this.getNumberAttribute('max_requests_per_second');
  }
  public set maxRequestsPerSecond(value: number) {
    this._maxRequestsPerSecond = value;
  }
  public resetMaxRequestsPerSecond() {
    this._maxRequestsPerSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestsPerSecondInput() {
    return this._maxRequestsPerSecond;
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: number; 
  public get resources() {
    return this.getNumberAttribute('resources');
  }
  public set resources(value: number) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }

  // start_requests_per_second - computed: false, optional: true, required: false
  private _startRequestsPerSecond?: number; 
  public get startRequestsPerSecond() {
    return this.getNumberAttribute('start_requests_per_second');
  }
  public set startRequestsPerSecond(value: number) {
    this._startRequestsPerSecond = value;
  }
  public resetStartRequestsPerSecond() {
    this._startRequestsPerSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startRequestsPerSecondInput() {
    return this._startRequestsPerSecond;
  }

  // target_requests_per_second - computed: false, optional: true, required: false
  private _targetRequestsPerSecond?: number; 
  public get targetRequestsPerSecond() {
    return this.getNumberAttribute('target_requests_per_second');
  }
  public set targetRequestsPerSecond(value: number) {
    this._targetRequestsPerSecond = value;
  }
  public resetTargetRequestsPerSecond() {
    this._targetRequestsPerSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRequestsPerSecondInput() {
    return this._targetRequestsPerSecond;
  }
}
export interface PtsScenarioLoadLoadSpecScriptOrigin {
  /**
  * Pressure testing time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#duration_seconds PtsScenario#duration_seconds}
  */
  readonly durationSeconds: number;
  /**
  * Number of machines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#machine_number PtsScenario#machine_number}
  */
  readonly machineNumber: number;
  /**
  * Machine specification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#machine_specification PtsScenario#machine_specification}
  */
  readonly machineSpecification: string;
}

export function ptsScenarioLoadLoadSpecScriptOriginToTerraform(struct?: PtsScenarioLoadLoadSpecScriptOriginOutputReference | PtsScenarioLoadLoadSpecScriptOrigin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration_seconds: cdktf.numberToTerraform(struct!.durationSeconds),
    machine_number: cdktf.numberToTerraform(struct!.machineNumber),
    machine_specification: cdktf.stringToTerraform(struct!.machineSpecification),
  }
}


export function ptsScenarioLoadLoadSpecScriptOriginToHclTerraform(struct?: PtsScenarioLoadLoadSpecScriptOriginOutputReference | PtsScenarioLoadLoadSpecScriptOrigin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.durationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    machine_number: {
      value: cdktf.numberToHclTerraform(struct!.machineNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    machine_specification: {
      value: cdktf.stringToHclTerraform(struct!.machineSpecification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PtsScenarioLoadLoadSpecScriptOriginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PtsScenarioLoadLoadSpecScriptOrigin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._durationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationSeconds = this._durationSeconds;
    }
    if (this._machineNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineNumber = this._machineNumber;
    }
    if (this._machineSpecification !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineSpecification = this._machineSpecification;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PtsScenarioLoadLoadSpecScriptOrigin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._durationSeconds = undefined;
      this._machineNumber = undefined;
      this._machineSpecification = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._durationSeconds = value.durationSeconds;
      this._machineNumber = value.machineNumber;
      this._machineSpecification = value.machineSpecification;
    }
  }

  // duration_seconds - computed: false, optional: false, required: true
  private _durationSeconds?: number; 
  public get durationSeconds() {
    return this.getNumberAttribute('duration_seconds');
  }
  public set durationSeconds(value: number) {
    this._durationSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationSecondsInput() {
    return this._durationSeconds;
  }

  // machine_number - computed: false, optional: false, required: true
  private _machineNumber?: number; 
  public get machineNumber() {
    return this.getNumberAttribute('machine_number');
  }
  public set machineNumber(value: number) {
    this._machineNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineNumberInput() {
    return this._machineNumber;
  }

  // machine_specification - computed: false, optional: false, required: true
  private _machineSpecification?: string; 
  public get machineSpecification() {
    return this.getStringAttribute('machine_specification');
  }
  public set machineSpecification(value: string) {
    this._machineSpecification = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineSpecificationInput() {
    return this._machineSpecification;
  }
}
export interface PtsScenarioLoadLoadSpec {
  /**
  * concurrency block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#concurrency PtsScenario#concurrency}
  */
  readonly concurrency?: PtsScenarioLoadLoadSpecConcurrency;
  /**
  * requests_per_second block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#requests_per_second PtsScenario#requests_per_second}
  */
  readonly requestsPerSecond?: PtsScenarioLoadLoadSpecRequestsPerSecond;
  /**
  * script_origin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#script_origin PtsScenario#script_origin}
  */
  readonly scriptOrigin?: PtsScenarioLoadLoadSpecScriptOrigin;
}

export function ptsScenarioLoadLoadSpecToTerraform(struct?: PtsScenarioLoadLoadSpecOutputReference | PtsScenarioLoadLoadSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    concurrency: ptsScenarioLoadLoadSpecConcurrencyToTerraform(struct!.concurrency),
    requests_per_second: ptsScenarioLoadLoadSpecRequestsPerSecondToTerraform(struct!.requestsPerSecond),
    script_origin: ptsScenarioLoadLoadSpecScriptOriginToTerraform(struct!.scriptOrigin),
  }
}


export function ptsScenarioLoadLoadSpecToHclTerraform(struct?: PtsScenarioLoadLoadSpecOutputReference | PtsScenarioLoadLoadSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    concurrency: {
      value: ptsScenarioLoadLoadSpecConcurrencyToHclTerraform(struct!.concurrency),
      isBlock: true,
      type: "list",
      storageClassType: "PtsScenarioLoadLoadSpecConcurrencyList",
    },
    requests_per_second: {
      value: ptsScenarioLoadLoadSpecRequestsPerSecondToHclTerraform(struct!.requestsPerSecond),
      isBlock: true,
      type: "list",
      storageClassType: "PtsScenarioLoadLoadSpecRequestsPerSecondList",
    },
    script_origin: {
      value: ptsScenarioLoadLoadSpecScriptOriginToHclTerraform(struct!.scriptOrigin),
      isBlock: true,
      type: "list",
      storageClassType: "PtsScenarioLoadLoadSpecScriptOriginList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PtsScenarioLoadLoadSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PtsScenarioLoadLoadSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._concurrency?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrency = this._concurrency?.internalValue;
    }
    if (this._requestsPerSecond?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestsPerSecond = this._requestsPerSecond?.internalValue;
    }
    if (this._scriptOrigin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptOrigin = this._scriptOrigin?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PtsScenarioLoadLoadSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._concurrency.internalValue = undefined;
      this._requestsPerSecond.internalValue = undefined;
      this._scriptOrigin.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._concurrency.internalValue = value.concurrency;
      this._requestsPerSecond.internalValue = value.requestsPerSecond;
      this._scriptOrigin.internalValue = value.scriptOrigin;
    }
  }

  // concurrency - computed: false, optional: true, required: false
  private _concurrency = new PtsScenarioLoadLoadSpecConcurrencyOutputReference(this, "concurrency");
  public get concurrency() {
    return this._concurrency;
  }
  public putConcurrency(value: PtsScenarioLoadLoadSpecConcurrency) {
    this._concurrency.internalValue = value;
  }
  public resetConcurrency() {
    this._concurrency.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrencyInput() {
    return this._concurrency.internalValue;
  }

  // requests_per_second - computed: false, optional: true, required: false
  private _requestsPerSecond = new PtsScenarioLoadLoadSpecRequestsPerSecondOutputReference(this, "requests_per_second");
  public get requestsPerSecond() {
    return this._requestsPerSecond;
  }
  public putRequestsPerSecond(value: PtsScenarioLoadLoadSpecRequestsPerSecond) {
    this._requestsPerSecond.internalValue = value;
  }
  public resetRequestsPerSecond() {
    this._requestsPerSecond.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsPerSecondInput() {
    return this._requestsPerSecond.internalValue;
  }

  // script_origin - computed: false, optional: true, required: false
  private _scriptOrigin = new PtsScenarioLoadLoadSpecScriptOriginOutputReference(this, "script_origin");
  public get scriptOrigin() {
    return this._scriptOrigin;
  }
  public putScriptOrigin(value: PtsScenarioLoadLoadSpecScriptOrigin) {
    this._scriptOrigin.internalValue = value;
  }
  public resetScriptOrigin() {
    this._scriptOrigin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptOriginInput() {
    return this._scriptOrigin.internalValue;
  }
}
export interface PtsScenarioLoadVpcLoadDistribution {
  /**
  * Region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#region PtsScenario#region}
  */
  readonly region?: string;
  /**
  * Regional ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#region_id PtsScenario#region_id}
  */
  readonly regionId: number;
  /**
  * Subnet ID list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#subnet_ids PtsScenario#subnet_ids}
  */
  readonly subnetIds?: string[];
  /**
  * VPC ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#vpc_id PtsScenario#vpc_id}
  */
  readonly vpcId?: string;
}

export function ptsScenarioLoadVpcLoadDistributionToTerraform(struct?: PtsScenarioLoadVpcLoadDistributionOutputReference | PtsScenarioLoadVpcLoadDistribution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region: cdktf.stringToTerraform(struct!.region),
    region_id: cdktf.numberToTerraform(struct!.regionId),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnetIds),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function ptsScenarioLoadVpcLoadDistributionToHclTerraform(struct?: PtsScenarioLoadVpcLoadDistributionOutputReference | PtsScenarioLoadVpcLoadDistribution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region_id: {
      value: cdktf.numberToHclTerraform(struct!.regionId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subnet_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PtsScenarioLoadVpcLoadDistributionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PtsScenarioLoadVpcLoadDistribution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._regionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionId = this._regionId;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PtsScenarioLoadVpcLoadDistribution | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._region = undefined;
      this._regionId = undefined;
      this._subnetIds = undefined;
      this._vpcId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._region = value.region;
      this._regionId = value.regionId;
      this._subnetIds = value.subnetIds;
      this._vpcId = value.vpcId;
    }
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // region_id - computed: false, optional: false, required: true
  private _regionId?: number; 
  public get regionId() {
    return this.getNumberAttribute('region_id');
  }
  public set regionId(value: number) {
    this._regionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // subnet_ids - computed: false, optional: true, required: false
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }
}
export interface PtsScenarioLoad {
  /**
  * geo_regions_load_distribution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#geo_regions_load_distribution PtsScenario#geo_regions_load_distribution}
  */
  readonly geoRegionsLoadDistribution?: PtsScenarioLoadGeoRegionsLoadDistribution[] | cdktf.IResolvable;
  /**
  * load_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#load_spec PtsScenario#load_spec}
  */
  readonly loadSpec?: PtsScenarioLoadLoadSpec;
  /**
  * vpc_load_distribution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#vpc_load_distribution PtsScenario#vpc_load_distribution}
  */
  readonly vpcLoadDistribution?: PtsScenarioLoadVpcLoadDistribution;
}

export function ptsScenarioLoadToTerraform(struct?: PtsScenarioLoadOutputReference | PtsScenarioLoad): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    geo_regions_load_distribution: cdktf.listMapper(ptsScenarioLoadGeoRegionsLoadDistributionToTerraform, true)(struct!.geoRegionsLoadDistribution),
    load_spec: ptsScenarioLoadLoadSpecToTerraform(struct!.loadSpec),
    vpc_load_distribution: ptsScenarioLoadVpcLoadDistributionToTerraform(struct!.vpcLoadDistribution),
  }
}


export function ptsScenarioLoadToHclTerraform(struct?: PtsScenarioLoadOutputReference | PtsScenarioLoad): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    geo_regions_load_distribution: {
      value: cdktf.listMapperHcl(ptsScenarioLoadGeoRegionsLoadDistributionToHclTerraform, true)(struct!.geoRegionsLoadDistribution),
      isBlock: true,
      type: "list",
      storageClassType: "PtsScenarioLoadGeoRegionsLoadDistributionList",
    },
    load_spec: {
      value: ptsScenarioLoadLoadSpecToHclTerraform(struct!.loadSpec),
      isBlock: true,
      type: "list",
      storageClassType: "PtsScenarioLoadLoadSpecList",
    },
    vpc_load_distribution: {
      value: ptsScenarioLoadVpcLoadDistributionToHclTerraform(struct!.vpcLoadDistribution),
      isBlock: true,
      type: "list",
      storageClassType: "PtsScenarioLoadVpcLoadDistributionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PtsScenarioLoadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PtsScenarioLoad | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._geoRegionsLoadDistribution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoRegionsLoadDistribution = this._geoRegionsLoadDistribution?.internalValue;
    }
    if (this._loadSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadSpec = this._loadSpec?.internalValue;
    }
    if (this._vpcLoadDistribution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcLoadDistribution = this._vpcLoadDistribution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PtsScenarioLoad | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._geoRegionsLoadDistribution.internalValue = undefined;
      this._loadSpec.internalValue = undefined;
      this._vpcLoadDistribution.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._geoRegionsLoadDistribution.internalValue = value.geoRegionsLoadDistribution;
      this._loadSpec.internalValue = value.loadSpec;
      this._vpcLoadDistribution.internalValue = value.vpcLoadDistribution;
    }
  }

  // geo_regions_load_distribution - computed: false, optional: true, required: false
  private _geoRegionsLoadDistribution = new PtsScenarioLoadGeoRegionsLoadDistributionList(this, "geo_regions_load_distribution", false);
  public get geoRegionsLoadDistribution() {
    return this._geoRegionsLoadDistribution;
  }
  public putGeoRegionsLoadDistribution(value: PtsScenarioLoadGeoRegionsLoadDistribution[] | cdktf.IResolvable) {
    this._geoRegionsLoadDistribution.internalValue = value;
  }
  public resetGeoRegionsLoadDistribution() {
    this._geoRegionsLoadDistribution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoRegionsLoadDistributionInput() {
    return this._geoRegionsLoadDistribution.internalValue;
  }

  // load_spec - computed: false, optional: true, required: false
  private _loadSpec = new PtsScenarioLoadLoadSpecOutputReference(this, "load_spec");
  public get loadSpec() {
    return this._loadSpec;
  }
  public putLoadSpec(value: PtsScenarioLoadLoadSpec) {
    this._loadSpec.internalValue = value;
  }
  public resetLoadSpec() {
    this._loadSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadSpecInput() {
    return this._loadSpec.internalValue;
  }

  // vpc_load_distribution - computed: false, optional: true, required: false
  private _vpcLoadDistribution = new PtsScenarioLoadVpcLoadDistributionOutputReference(this, "vpc_load_distribution");
  public get vpcLoadDistribution() {
    return this._vpcLoadDistribution;
  }
  public putVpcLoadDistribution(value: PtsScenarioLoadVpcLoadDistribution) {
    this._vpcLoadDistribution.internalValue = value;
  }
  public resetVpcLoadDistribution() {
    this._vpcLoadDistribution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcLoadDistributionInput() {
    return this._vpcLoadDistribution.internalValue;
  }
}
export interface PtsScenarioPlugins {
  /**
  * File id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#file_id PtsScenario#file_id}
  */
  readonly fileId?: string;
  /**
  * File name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#name PtsScenario#name}
  */
  readonly name?: string;
  /**
  * File size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#size PtsScenario#size}
  */
  readonly size?: number;
  /**
  * File type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#type PtsScenario#type}
  */
  readonly type?: string;
  /**
  * Update time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#updated_at PtsScenario#updated_at}
  */
  readonly updatedAt?: string;
}

export function ptsScenarioPluginsToTerraform(struct?: PtsScenarioPlugins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_id: cdktf.stringToTerraform(struct!.fileId),
    name: cdktf.stringToTerraform(struct!.name),
    size: cdktf.numberToTerraform(struct!.size),
    type: cdktf.stringToTerraform(struct!.type),
    updated_at: cdktf.stringToTerraform(struct!.updatedAt),
  }
}


export function ptsScenarioPluginsToHclTerraform(struct?: PtsScenarioPlugins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_id: {
      value: cdktf.stringToHclTerraform(struct!.fileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    updated_at: {
      value: cdktf.stringToHclTerraform(struct!.updatedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PtsScenarioPluginsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PtsScenarioPlugins | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileId = this._fileId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._updatedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedAt = this._updatedAt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PtsScenarioPlugins | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileId = undefined;
      this._name = undefined;
      this._size = undefined;
      this._type = undefined;
      this._updatedAt = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileId = value.fileId;
      this._name = value.name;
      this._size = value.size;
      this._type = value.type;
      this._updatedAt = value.updatedAt;
    }
  }

  // file_id - computed: false, optional: true, required: false
  private _fileId?: string; 
  public get fileId() {
    return this.getStringAttribute('file_id');
  }
  public set fileId(value: string) {
    this._fileId = value;
  }
  public resetFileId() {
    this._fileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileIdInput() {
    return this._fileId;
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

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // updated_at - computed: false, optional: true, required: false
  private _updatedAt?: string; 
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
  public set updatedAt(value: string) {
    this._updatedAt = value;
  }
  public resetUpdatedAt() {
    this._updatedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt;
  }
}

export class PtsScenarioPluginsList extends cdktf.ComplexList {
  public internalValue? : PtsScenarioPlugins[] | cdktf.IResolvable

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
  public get(index: number): PtsScenarioPluginsOutputReference {
    return new PtsScenarioPluginsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PtsScenarioProtocols {
  /**
  * File ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#file_id PtsScenario#file_id}
  */
  readonly fileId?: string;
  /**
  * Protocol name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#name PtsScenario#name}
  */
  readonly name?: string;
  /**
  * File name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#size PtsScenario#size}
  */
  readonly size?: number;
  /**
  * File type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#type PtsScenario#type}
  */
  readonly type?: string;
  /**
  * Update time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#updated_at PtsScenario#updated_at}
  */
  readonly updatedAt?: string;
}

export function ptsScenarioProtocolsToTerraform(struct?: PtsScenarioProtocols | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_id: cdktf.stringToTerraform(struct!.fileId),
    name: cdktf.stringToTerraform(struct!.name),
    size: cdktf.numberToTerraform(struct!.size),
    type: cdktf.stringToTerraform(struct!.type),
    updated_at: cdktf.stringToTerraform(struct!.updatedAt),
  }
}


export function ptsScenarioProtocolsToHclTerraform(struct?: PtsScenarioProtocols | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_id: {
      value: cdktf.stringToHclTerraform(struct!.fileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    updated_at: {
      value: cdktf.stringToHclTerraform(struct!.updatedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PtsScenarioProtocolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PtsScenarioProtocols | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileId = this._fileId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._updatedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedAt = this._updatedAt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PtsScenarioProtocols | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileId = undefined;
      this._name = undefined;
      this._size = undefined;
      this._type = undefined;
      this._updatedAt = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileId = value.fileId;
      this._name = value.name;
      this._size = value.size;
      this._type = value.type;
      this._updatedAt = value.updatedAt;
    }
  }

  // file_id - computed: false, optional: true, required: false
  private _fileId?: string; 
  public get fileId() {
    return this.getStringAttribute('file_id');
  }
  public set fileId(value: string) {
    this._fileId = value;
  }
  public resetFileId() {
    this._fileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileIdInput() {
    return this._fileId;
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

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // updated_at - computed: false, optional: true, required: false
  private _updatedAt?: string; 
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
  public set updatedAt(value: string) {
    this._updatedAt = value;
  }
  public resetUpdatedAt() {
    this._updatedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt;
  }
}

export class PtsScenarioProtocolsList extends cdktf.ComplexList {
  public internalValue? : PtsScenarioProtocols[] | cdktf.IResolvable

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
  public get(index: number): PtsScenarioProtocolsOutputReference {
    return new PtsScenarioProtocolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PtsScenarioRequestFiles {
  /**
  * File id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#file_id PtsScenario#file_id}
  */
  readonly fileId?: string;
  /**
  * File name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#name PtsScenario#name}
  */
  readonly name?: string;
  /**
  * File size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#size PtsScenario#size}
  */
  readonly size?: number;
  /**
  * File type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#type PtsScenario#type}
  */
  readonly type?: string;
  /**
  * Update time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#updated_at PtsScenario#updated_at}
  */
  readonly updatedAt?: string;
}

export function ptsScenarioRequestFilesToTerraform(struct?: PtsScenarioRequestFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_id: cdktf.stringToTerraform(struct!.fileId),
    name: cdktf.stringToTerraform(struct!.name),
    size: cdktf.numberToTerraform(struct!.size),
    type: cdktf.stringToTerraform(struct!.type),
    updated_at: cdktf.stringToTerraform(struct!.updatedAt),
  }
}


export function ptsScenarioRequestFilesToHclTerraform(struct?: PtsScenarioRequestFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_id: {
      value: cdktf.stringToHclTerraform(struct!.fileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    updated_at: {
      value: cdktf.stringToHclTerraform(struct!.updatedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PtsScenarioRequestFilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PtsScenarioRequestFiles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileId = this._fileId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._updatedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedAt = this._updatedAt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PtsScenarioRequestFiles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileId = undefined;
      this._name = undefined;
      this._size = undefined;
      this._type = undefined;
      this._updatedAt = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileId = value.fileId;
      this._name = value.name;
      this._size = value.size;
      this._type = value.type;
      this._updatedAt = value.updatedAt;
    }
  }

  // file_id - computed: false, optional: true, required: false
  private _fileId?: string; 
  public get fileId() {
    return this.getStringAttribute('file_id');
  }
  public set fileId(value: string) {
    this._fileId = value;
  }
  public resetFileId() {
    this._fileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileIdInput() {
    return this._fileId;
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

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // updated_at - computed: false, optional: true, required: false
  private _updatedAt?: string; 
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
  public set updatedAt(value: string) {
    this._updatedAt = value;
  }
  public resetUpdatedAt() {
    this._updatedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt;
  }
}

export class PtsScenarioRequestFilesList extends cdktf.ComplexList {
  public internalValue? : PtsScenarioRequestFiles[] | cdktf.IResolvable

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
  public get(index: number): PtsScenarioRequestFilesOutputReference {
    return new PtsScenarioRequestFilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PtsScenarioSlaPolicyAlertChannel {
  /**
  * AMP consumer ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#amp_consumer_id PtsScenario#amp_consumer_id}
  */
  readonly ampConsumerId?: string;
  /**
  * Notification template ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#notice_id PtsScenario#notice_id}
  */
  readonly noticeId?: string;
}

export function ptsScenarioSlaPolicyAlertChannelToTerraform(struct?: PtsScenarioSlaPolicyAlertChannelOutputReference | PtsScenarioSlaPolicyAlertChannel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    amp_consumer_id: cdktf.stringToTerraform(struct!.ampConsumerId),
    notice_id: cdktf.stringToTerraform(struct!.noticeId),
  }
}


export function ptsScenarioSlaPolicyAlertChannelToHclTerraform(struct?: PtsScenarioSlaPolicyAlertChannelOutputReference | PtsScenarioSlaPolicyAlertChannel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    amp_consumer_id: {
      value: cdktf.stringToHclTerraform(struct!.ampConsumerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notice_id: {
      value: cdktf.stringToHclTerraform(struct!.noticeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PtsScenarioSlaPolicyAlertChannelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PtsScenarioSlaPolicyAlertChannel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ampConsumerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ampConsumerId = this._ampConsumerId;
    }
    if (this._noticeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.noticeId = this._noticeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PtsScenarioSlaPolicyAlertChannel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ampConsumerId = undefined;
      this._noticeId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ampConsumerId = value.ampConsumerId;
      this._noticeId = value.noticeId;
    }
  }

  // amp_consumer_id - computed: false, optional: true, required: false
  private _ampConsumerId?: string; 
  public get ampConsumerId() {
    return this.getStringAttribute('amp_consumer_id');
  }
  public set ampConsumerId(value: string) {
    this._ampConsumerId = value;
  }
  public resetAmpConsumerId() {
    this._ampConsumerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ampConsumerIdInput() {
    return this._ampConsumerId;
  }

  // notice_id - computed: false, optional: true, required: false
  private _noticeId?: string; 
  public get noticeId() {
    return this.getStringAttribute('notice_id');
  }
  public set noticeId(value: string) {
    this._noticeId = value;
  }
  public resetNoticeId() {
    this._noticeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noticeIdInput() {
    return this._noticeId;
  }
}
export interface PtsScenarioSlaPolicySlaRulesLabelFilter {
  /**
  * Label name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#label_name PtsScenario#label_name}
  */
  readonly labelName?: string;
  /**
  * Label value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#label_value PtsScenario#label_value}
  */
  readonly labelValue?: string;
}

export function ptsScenarioSlaPolicySlaRulesLabelFilterToTerraform(struct?: PtsScenarioSlaPolicySlaRulesLabelFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_name: cdktf.stringToTerraform(struct!.labelName),
    label_value: cdktf.stringToTerraform(struct!.labelValue),
  }
}


export function ptsScenarioSlaPolicySlaRulesLabelFilterToHclTerraform(struct?: PtsScenarioSlaPolicySlaRulesLabelFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_name: {
      value: cdktf.stringToHclTerraform(struct!.labelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label_value: {
      value: cdktf.stringToHclTerraform(struct!.labelValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PtsScenarioSlaPolicySlaRulesLabelFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PtsScenarioSlaPolicySlaRulesLabelFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelName = this._labelName;
    }
    if (this._labelValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelValue = this._labelValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PtsScenarioSlaPolicySlaRulesLabelFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelName = undefined;
      this._labelValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelName = value.labelName;
      this._labelValue = value.labelValue;
    }
  }

  // label_name - computed: false, optional: true, required: false
  private _labelName?: string; 
  public get labelName() {
    return this.getStringAttribute('label_name');
  }
  public set labelName(value: string) {
    this._labelName = value;
  }
  public resetLabelName() {
    this._labelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelNameInput() {
    return this._labelName;
  }

  // label_value - computed: false, optional: true, required: false
  private _labelValue?: string; 
  public get labelValue() {
    return this.getStringAttribute('label_value');
  }
  public set labelValue(value: string) {
    this._labelValue = value;
  }
  public resetLabelValue() {
    this._labelValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelValueInput() {
    return this._labelValue;
  }
}

export class PtsScenarioSlaPolicySlaRulesLabelFilterList extends cdktf.ComplexList {
  public internalValue? : PtsScenarioSlaPolicySlaRulesLabelFilter[] | cdktf.IResolvable

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
  public get(index: number): PtsScenarioSlaPolicySlaRulesLabelFilterOutputReference {
    return new PtsScenarioSlaPolicySlaRulesLabelFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PtsScenarioSlaPolicySlaRules {
  /**
  * Whether to stop the stress test task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#abort_flag PtsScenario#abort_flag}
  */
  readonly abortFlag?: boolean | cdktf.IResolvable;
  /**
  * Aggregation method of pressure test index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#aggregation PtsScenario#aggregation}
  */
  readonly aggregation?: string;
  /**
  * Pressure test index condition judgment symbol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#condition PtsScenario#condition}
  */
  readonly condition?: string;
  /**
  * duraion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#for PtsScenario#for}
  */
  readonly for?: string;
  /**
  * Pressure test index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#metric PtsScenario#metric}
  */
  readonly metric?: string;
  /**
  * Threshold value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#value PtsScenario#value}
  */
  readonly value?: number;
  /**
  * label_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#label_filter PtsScenario#label_filter}
  */
  readonly labelFilter?: PtsScenarioSlaPolicySlaRulesLabelFilter[] | cdktf.IResolvable;
}

export function ptsScenarioSlaPolicySlaRulesToTerraform(struct?: PtsScenarioSlaPolicySlaRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abort_flag: cdktf.booleanToTerraform(struct!.abortFlag),
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    condition: cdktf.stringToTerraform(struct!.condition),
    for: cdktf.stringToTerraform(struct!.for),
    metric: cdktf.stringToTerraform(struct!.metric),
    value: cdktf.numberToTerraform(struct!.value),
    label_filter: cdktf.listMapper(ptsScenarioSlaPolicySlaRulesLabelFilterToTerraform, true)(struct!.labelFilter),
  }
}


export function ptsScenarioSlaPolicySlaRulesToHclTerraform(struct?: PtsScenarioSlaPolicySlaRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abort_flag: {
      value: cdktf.booleanToHclTerraform(struct!.abortFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    aggregation: {
      value: cdktf.stringToHclTerraform(struct!.aggregation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    for: {
      value: cdktf.stringToHclTerraform(struct!.for),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric: {
      value: cdktf.stringToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    label_filter: {
      value: cdktf.listMapperHcl(ptsScenarioSlaPolicySlaRulesLabelFilterToHclTerraform, true)(struct!.labelFilter),
      isBlock: true,
      type: "list",
      storageClassType: "PtsScenarioSlaPolicySlaRulesLabelFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PtsScenarioSlaPolicySlaRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PtsScenarioSlaPolicySlaRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abortFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.abortFlag = this._abortFlag;
    }
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._for !== undefined) {
      hasAnyValues = true;
      internalValueResult.for = this._for;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._labelFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelFilter = this._labelFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PtsScenarioSlaPolicySlaRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._abortFlag = undefined;
      this._aggregation = undefined;
      this._condition = undefined;
      this._for = undefined;
      this._metric = undefined;
      this._value = undefined;
      this._labelFilter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._abortFlag = value.abortFlag;
      this._aggregation = value.aggregation;
      this._condition = value.condition;
      this._for = value.for;
      this._metric = value.metric;
      this._value = value.value;
      this._labelFilter.internalValue = value.labelFilter;
    }
  }

  // abort_flag - computed: false, optional: true, required: false
  private _abortFlag?: boolean | cdktf.IResolvable; 
  public get abortFlag() {
    return this.getBooleanAttribute('abort_flag');
  }
  public set abortFlag(value: boolean | cdktf.IResolvable) {
    this._abortFlag = value;
  }
  public resetAbortFlag() {
    this._abortFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abortFlagInput() {
    return this._abortFlag;
  }

  // aggregation - computed: false, optional: true, required: false
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  public resetAggregation() {
    this._aggregation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // for - computed: false, optional: true, required: false
  private _for?: string; 
  public get for() {
    return this.getStringAttribute('for');
  }
  public set for(value: string) {
    this._for = value;
  }
  public resetFor() {
    this._for = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forInput() {
    return this._for;
  }

  // metric - computed: false, optional: true, required: false
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // label_filter - computed: false, optional: true, required: false
  private _labelFilter = new PtsScenarioSlaPolicySlaRulesLabelFilterList(this, "label_filter", false);
  public get labelFilter() {
    return this._labelFilter;
  }
  public putLabelFilter(value: PtsScenarioSlaPolicySlaRulesLabelFilter[] | cdktf.IResolvable) {
    this._labelFilter.internalValue = value;
  }
  public resetLabelFilter() {
    this._labelFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelFilterInput() {
    return this._labelFilter.internalValue;
  }
}

export class PtsScenarioSlaPolicySlaRulesList extends cdktf.ComplexList {
  public internalValue? : PtsScenarioSlaPolicySlaRules[] | cdktf.IResolvable

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
  public get(index: number): PtsScenarioSlaPolicySlaRulesOutputReference {
    return new PtsScenarioSlaPolicySlaRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PtsScenarioSlaPolicy {
  /**
  * alert_channel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#alert_channel PtsScenario#alert_channel}
  */
  readonly alertChannel?: PtsScenarioSlaPolicyAlertChannel;
  /**
  * sla_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#sla_rules PtsScenario#sla_rules}
  */
  readonly slaRules?: PtsScenarioSlaPolicySlaRules[] | cdktf.IResolvable;
}

export function ptsScenarioSlaPolicyToTerraform(struct?: PtsScenarioSlaPolicyOutputReference | PtsScenarioSlaPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_channel: ptsScenarioSlaPolicyAlertChannelToTerraform(struct!.alertChannel),
    sla_rules: cdktf.listMapper(ptsScenarioSlaPolicySlaRulesToTerraform, true)(struct!.slaRules),
  }
}


export function ptsScenarioSlaPolicyToHclTerraform(struct?: PtsScenarioSlaPolicyOutputReference | PtsScenarioSlaPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_channel: {
      value: ptsScenarioSlaPolicyAlertChannelToHclTerraform(struct!.alertChannel),
      isBlock: true,
      type: "list",
      storageClassType: "PtsScenarioSlaPolicyAlertChannelList",
    },
    sla_rules: {
      value: cdktf.listMapperHcl(ptsScenarioSlaPolicySlaRulesToHclTerraform, true)(struct!.slaRules),
      isBlock: true,
      type: "list",
      storageClassType: "PtsScenarioSlaPolicySlaRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PtsScenarioSlaPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PtsScenarioSlaPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertChannel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertChannel = this._alertChannel?.internalValue;
    }
    if (this._slaRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slaRules = this._slaRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PtsScenarioSlaPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alertChannel.internalValue = undefined;
      this._slaRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alertChannel.internalValue = value.alertChannel;
      this._slaRules.internalValue = value.slaRules;
    }
  }

  // alert_channel - computed: false, optional: true, required: false
  private _alertChannel = new PtsScenarioSlaPolicyAlertChannelOutputReference(this, "alert_channel");
  public get alertChannel() {
    return this._alertChannel;
  }
  public putAlertChannel(value: PtsScenarioSlaPolicyAlertChannel) {
    this._alertChannel.internalValue = value;
  }
  public resetAlertChannel() {
    this._alertChannel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertChannelInput() {
    return this._alertChannel.internalValue;
  }

  // sla_rules - computed: false, optional: true, required: false
  private _slaRules = new PtsScenarioSlaPolicySlaRulesList(this, "sla_rules", false);
  public get slaRules() {
    return this._slaRules;
  }
  public putSlaRules(value: PtsScenarioSlaPolicySlaRules[] | cdktf.IResolvable) {
    this._slaRules.internalValue = value;
  }
  public resetSlaRules() {
    this._slaRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaRulesInput() {
    return this._slaRules.internalValue;
  }
}
export interface PtsScenarioTestScripts {
  /**
  * Base64 encoded file content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#encoded_content PtsScenario#encoded_content}
  */
  readonly encodedContent?: string;
  /**
  * Base64 encoded har structure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#encoded_http_archive PtsScenario#encoded_http_archive}
  */
  readonly encodedHttpArchive?: string;
  /**
  * Script weight, range 1-100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#load_weight PtsScenario#load_weight}
  */
  readonly loadWeight?: number;
  /**
  * File name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#name PtsScenario#name}
  */
  readonly name?: string;
  /**
  * File size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#size PtsScenario#size}
  */
  readonly size?: number;
  /**
  * File type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#type PtsScenario#type}
  */
  readonly type?: string;
  /**
  * Update time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#updated_at PtsScenario#updated_at}
  */
  readonly updatedAt?: string;
}

export function ptsScenarioTestScriptsToTerraform(struct?: PtsScenarioTestScripts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encoded_content: cdktf.stringToTerraform(struct!.encodedContent),
    encoded_http_archive: cdktf.stringToTerraform(struct!.encodedHttpArchive),
    load_weight: cdktf.numberToTerraform(struct!.loadWeight),
    name: cdktf.stringToTerraform(struct!.name),
    size: cdktf.numberToTerraform(struct!.size),
    type: cdktf.stringToTerraform(struct!.type),
    updated_at: cdktf.stringToTerraform(struct!.updatedAt),
  }
}


export function ptsScenarioTestScriptsToHclTerraform(struct?: PtsScenarioTestScripts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encoded_content: {
      value: cdktf.stringToHclTerraform(struct!.encodedContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encoded_http_archive: {
      value: cdktf.stringToHclTerraform(struct!.encodedHttpArchive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_weight: {
      value: cdktf.numberToHclTerraform(struct!.loadWeight),
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
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    updated_at: {
      value: cdktf.stringToHclTerraform(struct!.updatedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PtsScenarioTestScriptsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PtsScenarioTestScripts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encodedContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.encodedContent = this._encodedContent;
    }
    if (this._encodedHttpArchive !== undefined) {
      hasAnyValues = true;
      internalValueResult.encodedHttpArchive = this._encodedHttpArchive;
    }
    if (this._loadWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadWeight = this._loadWeight;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._updatedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedAt = this._updatedAt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PtsScenarioTestScripts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encodedContent = undefined;
      this._encodedHttpArchive = undefined;
      this._loadWeight = undefined;
      this._name = undefined;
      this._size = undefined;
      this._type = undefined;
      this._updatedAt = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encodedContent = value.encodedContent;
      this._encodedHttpArchive = value.encodedHttpArchive;
      this._loadWeight = value.loadWeight;
      this._name = value.name;
      this._size = value.size;
      this._type = value.type;
      this._updatedAt = value.updatedAt;
    }
  }

  // encoded_content - computed: false, optional: true, required: false
  private _encodedContent?: string; 
  public get encodedContent() {
    return this.getStringAttribute('encoded_content');
  }
  public set encodedContent(value: string) {
    this._encodedContent = value;
  }
  public resetEncodedContent() {
    this._encodedContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodedContentInput() {
    return this._encodedContent;
  }

  // encoded_http_archive - computed: false, optional: true, required: false
  private _encodedHttpArchive?: string; 
  public get encodedHttpArchive() {
    return this.getStringAttribute('encoded_http_archive');
  }
  public set encodedHttpArchive(value: string) {
    this._encodedHttpArchive = value;
  }
  public resetEncodedHttpArchive() {
    this._encodedHttpArchive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodedHttpArchiveInput() {
    return this._encodedHttpArchive;
  }

  // load_weight - computed: false, optional: true, required: false
  private _loadWeight?: number; 
  public get loadWeight() {
    return this.getNumberAttribute('load_weight');
  }
  public set loadWeight(value: number) {
    this._loadWeight = value;
  }
  public resetLoadWeight() {
    this._loadWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadWeightInput() {
    return this._loadWeight;
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

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // updated_at - computed: false, optional: true, required: false
  private _updatedAt?: string; 
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
  public set updatedAt(value: string) {
    this._updatedAt = value;
  }
  public resetUpdatedAt() {
    this._updatedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt;
  }
}

export class PtsScenarioTestScriptsList extends cdktf.ComplexList {
  public internalValue? : PtsScenarioTestScripts[] | cdktf.IResolvable

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
  public get(index: number): PtsScenarioTestScriptsOutputReference {
    return new PtsScenarioTestScriptsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario tencentcloud_pts_scenario}
*/
export class PtsScenario extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_pts_scenario";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PtsScenario resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PtsScenario to import
  * @param importFromId The id of the existing PtsScenario that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PtsScenario to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_pts_scenario", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/pts_scenario tencentcloud_pts_scenario} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PtsScenarioConfig
  */
  public constructor(scope: Construct, id: string, config: PtsScenarioConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_pts_scenario',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.39',
        providerVersionConstraint: '1.82.39'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cronId = config.cronId;
    this._description = config.description;
    this._extensions = config.extensions;
    this._id = config.id;
    this._name = config.name;
    this._projectId = config.projectId;
    this._type = config.type;
    this._datasets.internalValue = config.datasets;
    this._domainNameConfig.internalValue = config.domainNameConfig;
    this._load.internalValue = config.load;
    this._plugins.internalValue = config.plugins;
    this._protocols.internalValue = config.protocols;
    this._requestFiles.internalValue = config.requestFiles;
    this._slaPolicy.internalValue = config.slaPolicy;
    this._testScripts.internalValue = config.testScripts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_id - computed: true, optional: false, required: false
  public get appId() {
    return this.getNumberAttribute('app_id');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // cron_id - computed: false, optional: true, required: false
  private _cronId?: string; 
  public get cronId() {
    return this.getStringAttribute('cron_id');
  }
  public set cronId(value: string) {
    this._cronId = value;
  }
  public resetCronId() {
    this._cronId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronIdInput() {
    return this._cronId;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // extensions - computed: false, optional: true, required: false
  private _extensions?: string[]; 
  public get extensions() {
    return cdktf.Fn.tolist(this.getListAttribute('extensions'));
  }
  public set extensions(value: string[]) {
    this._extensions = value;
  }
  public resetExtensions() {
    this._extensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionsInput() {
    return this._extensions;
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

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // sub_account_uin - computed: true, optional: false, required: false
  public get subAccountUin() {
    return this.getStringAttribute('sub_account_uin');
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

  // uin - computed: true, optional: false, required: false
  public get uin() {
    return this.getStringAttribute('uin');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // datasets - computed: false, optional: true, required: false
  private _datasets = new PtsScenarioDatasetsList(this, "datasets", false);
  public get datasets() {
    return this._datasets;
  }
  public putDatasets(value: PtsScenarioDatasets[] | cdktf.IResolvable) {
    this._datasets.internalValue = value;
  }
  public resetDatasets() {
    this._datasets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetsInput() {
    return this._datasets.internalValue;
  }

  // domain_name_config - computed: false, optional: true, required: false
  private _domainNameConfig = new PtsScenarioDomainNameConfigOutputReference(this, "domain_name_config");
  public get domainNameConfig() {
    return this._domainNameConfig;
  }
  public putDomainNameConfig(value: PtsScenarioDomainNameConfig) {
    this._domainNameConfig.internalValue = value;
  }
  public resetDomainNameConfig() {
    this._domainNameConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameConfigInput() {
    return this._domainNameConfig.internalValue;
  }

  // load - computed: false, optional: true, required: false
  private _load = new PtsScenarioLoadOutputReference(this, "load");
  public get load() {
    return this._load;
  }
  public putLoad(value: PtsScenarioLoad) {
    this._load.internalValue = value;
  }
  public resetLoad() {
    this._load.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadInput() {
    return this._load.internalValue;
  }

  // plugins - computed: false, optional: true, required: false
  private _plugins = new PtsScenarioPluginsList(this, "plugins", false);
  public get plugins() {
    return this._plugins;
  }
  public putPlugins(value: PtsScenarioPlugins[] | cdktf.IResolvable) {
    this._plugins.internalValue = value;
  }
  public resetPlugins() {
    this._plugins.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginsInput() {
    return this._plugins.internalValue;
  }

  // protocols - computed: false, optional: true, required: false
  private _protocols = new PtsScenarioProtocolsList(this, "protocols", false);
  public get protocols() {
    return this._protocols;
  }
  public putProtocols(value: PtsScenarioProtocols[] | cdktf.IResolvable) {
    this._protocols.internalValue = value;
  }
  public resetProtocols() {
    this._protocols.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols.internalValue;
  }

  // request_files - computed: false, optional: true, required: false
  private _requestFiles = new PtsScenarioRequestFilesList(this, "request_files", false);
  public get requestFiles() {
    return this._requestFiles;
  }
  public putRequestFiles(value: PtsScenarioRequestFiles[] | cdktf.IResolvable) {
    this._requestFiles.internalValue = value;
  }
  public resetRequestFiles() {
    this._requestFiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestFilesInput() {
    return this._requestFiles.internalValue;
  }

  // sla_policy - computed: false, optional: true, required: false
  private _slaPolicy = new PtsScenarioSlaPolicyOutputReference(this, "sla_policy");
  public get slaPolicy() {
    return this._slaPolicy;
  }
  public putSlaPolicy(value: PtsScenarioSlaPolicy) {
    this._slaPolicy.internalValue = value;
  }
  public resetSlaPolicy() {
    this._slaPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaPolicyInput() {
    return this._slaPolicy.internalValue;
  }

  // test_scripts - computed: false, optional: true, required: false
  private _testScripts = new PtsScenarioTestScriptsList(this, "test_scripts", false);
  public get testScripts() {
    return this._testScripts;
  }
  public putTestScripts(value: PtsScenarioTestScripts[] | cdktf.IResolvable) {
    this._testScripts.internalValue = value;
  }
  public resetTestScripts() {
    this._testScripts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testScriptsInput() {
    return this._testScripts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cron_id: cdktf.stringToTerraform(this._cronId),
      description: cdktf.stringToTerraform(this._description),
      extensions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._extensions),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      type: cdktf.stringToTerraform(this._type),
      datasets: cdktf.listMapper(ptsScenarioDatasetsToTerraform, true)(this._datasets.internalValue),
      domain_name_config: ptsScenarioDomainNameConfigToTerraform(this._domainNameConfig.internalValue),
      load: ptsScenarioLoadToTerraform(this._load.internalValue),
      plugins: cdktf.listMapper(ptsScenarioPluginsToTerraform, true)(this._plugins.internalValue),
      protocols: cdktf.listMapper(ptsScenarioProtocolsToTerraform, true)(this._protocols.internalValue),
      request_files: cdktf.listMapper(ptsScenarioRequestFilesToTerraform, true)(this._requestFiles.internalValue),
      sla_policy: ptsScenarioSlaPolicyToTerraform(this._slaPolicy.internalValue),
      test_scripts: cdktf.listMapper(ptsScenarioTestScriptsToTerraform, true)(this._testScripts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cron_id: {
        value: cdktf.stringToHclTerraform(this._cronId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extensions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._extensions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      datasets: {
        value: cdktf.listMapperHcl(ptsScenarioDatasetsToHclTerraform, true)(this._datasets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PtsScenarioDatasetsList",
      },
      domain_name_config: {
        value: ptsScenarioDomainNameConfigToHclTerraform(this._domainNameConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PtsScenarioDomainNameConfigList",
      },
      load: {
        value: ptsScenarioLoadToHclTerraform(this._load.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PtsScenarioLoadList",
      },
      plugins: {
        value: cdktf.listMapperHcl(ptsScenarioPluginsToHclTerraform, true)(this._plugins.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PtsScenarioPluginsList",
      },
      protocols: {
        value: cdktf.listMapperHcl(ptsScenarioProtocolsToHclTerraform, true)(this._protocols.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PtsScenarioProtocolsList",
      },
      request_files: {
        value: cdktf.listMapperHcl(ptsScenarioRequestFilesToHclTerraform, true)(this._requestFiles.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PtsScenarioRequestFilesList",
      },
      sla_policy: {
        value: ptsScenarioSlaPolicyToHclTerraform(this._slaPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PtsScenarioSlaPolicyList",
      },
      test_scripts: {
        value: cdktf.listMapperHcl(ptsScenarioTestScriptsToHclTerraform, true)(this._testScripts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PtsScenarioTestScriptsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
