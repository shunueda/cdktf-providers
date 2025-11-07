// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/credential_to_site_by_siteid_create_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CredentialToSiteBySiteidCreateV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/credential_to_site_by_siteid_create_v2#id CredentialToSiteBySiteidCreateV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/credential_to_site_by_siteid_create_v2#parameters CredentialToSiteBySiteidCreateV2#parameters}
  */
  readonly parameters: CredentialToSiteBySiteidCreateV2Parameters;
}
export interface CredentialToSiteBySiteidCreateV2Item {
}

export function credentialToSiteBySiteidCreateV2ItemToTerraform(struct?: CredentialToSiteBySiteidCreateV2Item): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function credentialToSiteBySiteidCreateV2ItemToHclTerraform(struct?: CredentialToSiteBySiteidCreateV2Item): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CredentialToSiteBySiteidCreateV2ItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CredentialToSiteBySiteidCreateV2Item | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CredentialToSiteBySiteidCreateV2Item | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // task_id - computed: true, optional: false, required: false
  public get taskId() {
    return this.getStringAttribute('task_id');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class CredentialToSiteBySiteidCreateV2ItemList extends cdktf.ComplexList {

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
  public get(index: number): CredentialToSiteBySiteidCreateV2ItemOutputReference {
    return new CredentialToSiteBySiteidCreateV2ItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CredentialToSiteBySiteidCreateV2Parameters {
  /**
  * CLI Credential Id
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/credential_to_site_by_siteid_create_v2#cli_id CredentialToSiteBySiteidCreateV2#cli_id}
  */
  readonly cliId?: string;
  /**
  * HTTP(S) Read Credential Id
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/credential_to_site_by_siteid_create_v2#http_read CredentialToSiteBySiteidCreateV2#http_read}
  */
  readonly httpRead?: string;
  /**
  * HTTP(S) Write Credential Id
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/credential_to_site_by_siteid_create_v2#http_write CredentialToSiteBySiteidCreateV2#http_write}
  */
  readonly httpWrite?: string;
  /**
  * siteId path parameter. Site Id to assign credential.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/credential_to_site_by_siteid_create_v2#site_id CredentialToSiteBySiteidCreateV2#site_id}
  */
  readonly siteId: string;
  /**
  * SNMPv2c Read Credential Id
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/credential_to_site_by_siteid_create_v2#snmp_v2_read_id CredentialToSiteBySiteidCreateV2#snmp_v2_read_id}
  */
  readonly snmpV2ReadId?: string;
  /**
  * SNMPv2c Write Credential Id
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/credential_to_site_by_siteid_create_v2#snmp_v2_write_id CredentialToSiteBySiteidCreateV2#snmp_v2_write_id}
  */
  readonly snmpV2WriteId?: string;
  /**
  * SNMPv3 Credential Id
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/credential_to_site_by_siteid_create_v2#snmp_v3_id CredentialToSiteBySiteidCreateV2#snmp_v3_id}
  */
  readonly snmpV3Id?: string;
}

export function credentialToSiteBySiteidCreateV2ParametersToTerraform(struct?: CredentialToSiteBySiteidCreateV2ParametersOutputReference | CredentialToSiteBySiteidCreateV2Parameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cli_id: cdktf.stringToTerraform(struct!.cliId),
    http_read: cdktf.stringToTerraform(struct!.httpRead),
    http_write: cdktf.stringToTerraform(struct!.httpWrite),
    site_id: cdktf.stringToTerraform(struct!.siteId),
    snmp_v2_read_id: cdktf.stringToTerraform(struct!.snmpV2ReadId),
    snmp_v2_write_id: cdktf.stringToTerraform(struct!.snmpV2WriteId),
    snmp_v3_id: cdktf.stringToTerraform(struct!.snmpV3Id),
  }
}


export function credentialToSiteBySiteidCreateV2ParametersToHclTerraform(struct?: CredentialToSiteBySiteidCreateV2ParametersOutputReference | CredentialToSiteBySiteidCreateV2Parameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cli_id: {
      value: cdktf.stringToHclTerraform(struct!.cliId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_read: {
      value: cdktf.stringToHclTerraform(struct!.httpRead),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_write: {
      value: cdktf.stringToHclTerraform(struct!.httpWrite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_id: {
      value: cdktf.stringToHclTerraform(struct!.siteId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snmp_v2_read_id: {
      value: cdktf.stringToHclTerraform(struct!.snmpV2ReadId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snmp_v2_write_id: {
      value: cdktf.stringToHclTerraform(struct!.snmpV2WriteId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snmp_v3_id: {
      value: cdktf.stringToHclTerraform(struct!.snmpV3Id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CredentialToSiteBySiteidCreateV2ParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CredentialToSiteBySiteidCreateV2Parameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cliId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cliId = this._cliId;
    }
    if (this._httpRead !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRead = this._httpRead;
    }
    if (this._httpWrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpWrite = this._httpWrite;
    }
    if (this._siteId !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteId = this._siteId;
    }
    if (this._snmpV2ReadId !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmpV2ReadId = this._snmpV2ReadId;
    }
    if (this._snmpV2WriteId !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmpV2WriteId = this._snmpV2WriteId;
    }
    if (this._snmpV3Id !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmpV3Id = this._snmpV3Id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CredentialToSiteBySiteidCreateV2Parameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cliId = undefined;
      this._httpRead = undefined;
      this._httpWrite = undefined;
      this._siteId = undefined;
      this._snmpV2ReadId = undefined;
      this._snmpV2WriteId = undefined;
      this._snmpV3Id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cliId = value.cliId;
      this._httpRead = value.httpRead;
      this._httpWrite = value.httpWrite;
      this._siteId = value.siteId;
      this._snmpV2ReadId = value.snmpV2ReadId;
      this._snmpV2WriteId = value.snmpV2WriteId;
      this._snmpV3Id = value.snmpV3Id;
    }
  }

  // cli_id - computed: true, optional: true, required: false
  private _cliId?: string; 
  public get cliId() {
    return this.getStringAttribute('cli_id');
  }
  public set cliId(value: string) {
    this._cliId = value;
  }
  public resetCliId() {
    this._cliId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliIdInput() {
    return this._cliId;
  }

  // http_read - computed: true, optional: true, required: false
  private _httpRead?: string; 
  public get httpRead() {
    return this.getStringAttribute('http_read');
  }
  public set httpRead(value: string) {
    this._httpRead = value;
  }
  public resetHttpRead() {
    this._httpRead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpReadInput() {
    return this._httpRead;
  }

  // http_write - computed: true, optional: true, required: false
  private _httpWrite?: string; 
  public get httpWrite() {
    return this.getStringAttribute('http_write');
  }
  public set httpWrite(value: string) {
    this._httpWrite = value;
  }
  public resetHttpWrite() {
    this._httpWrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpWriteInput() {
    return this._httpWrite;
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // snmp_v2_read_id - computed: true, optional: true, required: false
  private _snmpV2ReadId?: string; 
  public get snmpV2ReadId() {
    return this.getStringAttribute('snmp_v2_read_id');
  }
  public set snmpV2ReadId(value: string) {
    this._snmpV2ReadId = value;
  }
  public resetSnmpV2ReadId() {
    this._snmpV2ReadId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpV2ReadIdInput() {
    return this._snmpV2ReadId;
  }

  // snmp_v2_write_id - computed: true, optional: true, required: false
  private _snmpV2WriteId?: string; 
  public get snmpV2WriteId() {
    return this.getStringAttribute('snmp_v2_write_id');
  }
  public set snmpV2WriteId(value: string) {
    this._snmpV2WriteId = value;
  }
  public resetSnmpV2WriteId() {
    this._snmpV2WriteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpV2WriteIdInput() {
    return this._snmpV2WriteId;
  }

  // snmp_v3_id - computed: true, optional: true, required: false
  private _snmpV3Id?: string; 
  public get snmpV3Id() {
    return this.getStringAttribute('snmp_v3_id');
  }
  public set snmpV3Id(value: string) {
    this._snmpV3Id = value;
  }
  public resetSnmpV3Id() {
    this._snmpV3Id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpV3IdInput() {
    return this._snmpV3Id;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/credential_to_site_by_siteid_create_v2 dnacenter_credential_to_site_by_siteid_create_v2}
*/
export class CredentialToSiteBySiteidCreateV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_credential_to_site_by_siteid_create_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CredentialToSiteBySiteidCreateV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CredentialToSiteBySiteidCreateV2 to import
  * @param importFromId The id of the existing CredentialToSiteBySiteidCreateV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/credential_to_site_by_siteid_create_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CredentialToSiteBySiteidCreateV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_credential_to_site_by_siteid_create_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/credential_to_site_by_siteid_create_v2 dnacenter_credential_to_site_by_siteid_create_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CredentialToSiteBySiteidCreateV2Config
  */
  public constructor(scope: Construct, id: string, config: CredentialToSiteBySiteidCreateV2Config) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_credential_to_site_by_siteid_create_v2',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21'
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
    this._parameters.internalValue = config.parameters;
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

  // item - computed: true, optional: false, required: false
  private _item = new CredentialToSiteBySiteidCreateV2ItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters = new CredentialToSiteBySiteidCreateV2ParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: CredentialToSiteBySiteidCreateV2Parameters) {
    this._parameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      parameters: credentialToSiteBySiteidCreateV2ParametersToTerraform(this._parameters.internalValue),
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
      parameters: {
        value: credentialToSiteBySiteidCreateV2ParametersToHclTerraform(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CredentialToSiteBySiteidCreateV2ParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
