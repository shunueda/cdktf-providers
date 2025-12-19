// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/dns_resolution_lines
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudDnsResolutionLinesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/dns_resolution_lines#domain_name DataAlicloudDnsResolutionLines#domain_name}
  */
  readonly domainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/dns_resolution_lines#id DataAlicloudDnsResolutionLines#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/dns_resolution_lines#lang DataAlicloudDnsResolutionLines#lang}
  */
  readonly lang?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/dns_resolution_lines#line_codes DataAlicloudDnsResolutionLines#line_codes}
  */
  readonly lineCodes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/dns_resolution_lines#line_display_names DataAlicloudDnsResolutionLines#line_display_names}
  */
  readonly lineDisplayNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/dns_resolution_lines#line_names DataAlicloudDnsResolutionLines#line_names}
  */
  readonly lineNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/dns_resolution_lines#output_file DataAlicloudDnsResolutionLines#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/dns_resolution_lines#user_client_ip DataAlicloudDnsResolutionLines#user_client_ip}
  */
  readonly userClientIp?: string;
}
export interface DataAlicloudDnsResolutionLinesLines {
}

export function dataAlicloudDnsResolutionLinesLinesToTerraform(struct?: DataAlicloudDnsResolutionLinesLines): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudDnsResolutionLinesLinesToHclTerraform(struct?: DataAlicloudDnsResolutionLinesLines): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudDnsResolutionLinesLinesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudDnsResolutionLinesLines | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudDnsResolutionLinesLines | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // line_code - computed: true, optional: false, required: false
  public get lineCode() {
    return this.getStringAttribute('line_code');
  }

  // line_display_name - computed: true, optional: false, required: false
  public get lineDisplayName() {
    return this.getStringAttribute('line_display_name');
  }

  // line_name - computed: true, optional: false, required: false
  public get lineName() {
    return this.getStringAttribute('line_name');
  }
}

export class DataAlicloudDnsResolutionLinesLinesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudDnsResolutionLinesLinesOutputReference {
    return new DataAlicloudDnsResolutionLinesLinesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/dns_resolution_lines alicloud_dns_resolution_lines}
*/
export class DataAlicloudDnsResolutionLines extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_dns_resolution_lines";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudDnsResolutionLines resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudDnsResolutionLines to import
  * @param importFromId The id of the existing DataAlicloudDnsResolutionLines that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/dns_resolution_lines#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudDnsResolutionLines to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_dns_resolution_lines", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/dns_resolution_lines alicloud_dns_resolution_lines} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudDnsResolutionLinesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudDnsResolutionLinesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_dns_resolution_lines',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domainName = config.domainName;
    this._id = config.id;
    this._lang = config.lang;
    this._lineCodes = config.lineCodes;
    this._lineDisplayNames = config.lineDisplayNames;
    this._lineNames = config.lineNames;
    this._outputFile = config.outputFile;
    this._userClientIp = config.userClientIp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain_name - computed: false, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
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

  // lang - computed: false, optional: true, required: false
  private _lang?: string; 
  public get lang() {
    return this.getStringAttribute('lang');
  }
  public set lang(value: string) {
    this._lang = value;
  }
  public resetLang() {
    this._lang = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get langInput() {
    return this._lang;
  }

  // line_codes - computed: true, optional: true, required: false
  private _lineCodes?: string[]; 
  public get lineCodes() {
    return this.getListAttribute('line_codes');
  }
  public set lineCodes(value: string[]) {
    this._lineCodes = value;
  }
  public resetLineCodes() {
    this._lineCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineCodesInput() {
    return this._lineCodes;
  }

  // line_display_names - computed: true, optional: true, required: false
  private _lineDisplayNames?: string[]; 
  public get lineDisplayNames() {
    return this.getListAttribute('line_display_names');
  }
  public set lineDisplayNames(value: string[]) {
    this._lineDisplayNames = value;
  }
  public resetLineDisplayNames() {
    this._lineDisplayNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineDisplayNamesInput() {
    return this._lineDisplayNames;
  }

  // line_names - computed: false, optional: true, required: false
  private _lineNames?: string[]; 
  public get lineNames() {
    return this.getListAttribute('line_names');
  }
  public set lineNames(value: string[]) {
    this._lineNames = value;
  }
  public resetLineNames() {
    this._lineNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineNamesInput() {
    return this._lineNames;
  }

  // lines - computed: true, optional: false, required: false
  private _lines = new DataAlicloudDnsResolutionLinesLinesList(this, "lines", false);
  public get lines() {
    return this._lines;
  }

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
  }

  // user_client_ip - computed: false, optional: true, required: false
  private _userClientIp?: string; 
  public get userClientIp() {
    return this.getStringAttribute('user_client_ip');
  }
  public set userClientIp(value: string) {
    this._userClientIp = value;
  }
  public resetUserClientIp() {
    this._userClientIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userClientIpInput() {
    return this._userClientIp;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_name: cdktf.stringToTerraform(this._domainName),
      id: cdktf.stringToTerraform(this._id),
      lang: cdktf.stringToTerraform(this._lang),
      line_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._lineCodes),
      line_display_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._lineDisplayNames),
      line_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._lineNames),
      output_file: cdktf.stringToTerraform(this._outputFile),
      user_client_ip: cdktf.stringToTerraform(this._userClientIp),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
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
      lang: {
        value: cdktf.stringToHclTerraform(this._lang),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      line_codes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._lineCodes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      line_display_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._lineDisplayNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      line_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._lineNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_client_ip: {
        value: cdktf.stringToHclTerraform(this._userClientIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
