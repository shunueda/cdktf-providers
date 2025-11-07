// https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/dnss
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetappOntapDnssConfig extends cdktf.TerraformMetaArguments {
  /**
  * Connection profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/dnss#cx_profile_name DataNetappOntapDnss#cx_profile_name}
  */
  readonly cxProfileName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/dnss#filter DataNetappOntapDnss#filter}
  */
  readonly filter?: DataNetappOntapDnssFilter;
}
export interface DataNetappOntapDnssFilter {
  /**
  * DNS domain such as 'sales.bar.com'. The first domain is the one that the svm belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/dnss#dns_domains DataNetappOntapDnss#dns_domains}
  */
  readonly dnsDomains?: string;
  /**
  * IPv4 address of name servers such as '123.123.123.123'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/dnss#name_servers DataNetappOntapDnss#name_servers}
  */
  readonly nameServers?: string;
  /**
  * IPInterface svm name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/dnss#svm_name DataNetappOntapDnss#svm_name}
  */
  readonly svmName?: string;
}

export function dataNetappOntapDnssFilterToTerraform(struct?: DataNetappOntapDnssFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_domains: cdktf.stringToTerraform(struct!.dnsDomains),
    name_servers: cdktf.stringToTerraform(struct!.nameServers),
    svm_name: cdktf.stringToTerraform(struct!.svmName),
  }
}


export function dataNetappOntapDnssFilterToHclTerraform(struct?: DataNetappOntapDnssFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_domains: {
      value: cdktf.stringToHclTerraform(struct!.dnsDomains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_servers: {
      value: cdktf.stringToHclTerraform(struct!.nameServers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    svm_name: {
      value: cdktf.stringToHclTerraform(struct!.svmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNetappOntapDnssFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapDnssFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsDomains = this._dnsDomains;
    }
    if (this._nameServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameServers = this._nameServers;
    }
    if (this._svmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.svmName = this._svmName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapDnssFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsDomains = undefined;
      this._nameServers = undefined;
      this._svmName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsDomains = value.dnsDomains;
      this._nameServers = value.nameServers;
      this._svmName = value.svmName;
    }
  }

  // dns_domains - computed: false, optional: true, required: false
  private _dnsDomains?: string; 
  public get dnsDomains() {
    return this.getStringAttribute('dns_domains');
  }
  public set dnsDomains(value: string) {
    this._dnsDomains = value;
  }
  public resetDnsDomains() {
    this._dnsDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsDomainsInput() {
    return this._dnsDomains;
  }

  // name_servers - computed: false, optional: true, required: false
  private _nameServers?: string; 
  public get nameServers() {
    return this.getStringAttribute('name_servers');
  }
  public set nameServers(value: string) {
    this._nameServers = value;
  }
  public resetNameServers() {
    this._nameServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameServersInput() {
    return this._nameServers;
  }

  // svm_name - computed: false, optional: true, required: false
  private _svmName?: string; 
  public get svmName() {
    return this.getStringAttribute('svm_name');
  }
  public set svmName(value: string) {
    this._svmName = value;
  }
  public resetSvmName() {
    this._svmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svmNameInput() {
    return this._svmName;
  }
}
export interface DataNetappOntapDnssNameServicesDnss {
}

export function dataNetappOntapDnssNameServicesDnssToTerraform(struct?: DataNetappOntapDnssNameServicesDnss): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetappOntapDnssNameServicesDnssToHclTerraform(struct?: DataNetappOntapDnssNameServicesDnss): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetappOntapDnssNameServicesDnssOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetappOntapDnssNameServicesDnss | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapDnssNameServicesDnss | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cx_profile_name - computed: true, optional: false, required: false
  public get cxProfileName() {
    return this.getStringAttribute('cx_profile_name');
  }

  // dns_domains - computed: true, optional: false, required: false
  public get dnsDomains() {
    return this.getListAttribute('dns_domains');
  }

  // name_servers - computed: true, optional: false, required: false
  public get nameServers() {
    return this.getListAttribute('name_servers');
  }

  // svm_name - computed: true, optional: false, required: false
  public get svmName() {
    return this.getStringAttribute('svm_name');
  }

  // svm_uuid - computed: true, optional: false, required: false
  public get svmUuid() {
    return this.getStringAttribute('svm_uuid');
  }
}

export class DataNetappOntapDnssNameServicesDnssList extends cdktf.ComplexList {

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
  public get(index: number): DataNetappOntapDnssNameServicesDnssOutputReference {
    return new DataNetappOntapDnssNameServicesDnssOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/dnss netapp-ontap_dnss}
*/
export class DataNetappOntapDnss extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-ontap_dnss";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetappOntapDnss resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetappOntapDnss to import
  * @param importFromId The id of the existing DataNetappOntapDnss that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/dnss#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetappOntapDnss to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-ontap_dnss", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/dnss netapp-ontap_dnss} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetappOntapDnssConfig
  */
  public constructor(scope: Construct, id: string, config: DataNetappOntapDnssConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-ontap_dnss',
      terraformGeneratorMetadata: {
        providerName: 'netapp-ontap',
        providerVersion: '2.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cxProfileName = config.cxProfileName;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cx_profile_name - computed: false, optional: false, required: true
  private _cxProfileName?: string; 
  public get cxProfileName() {
    return this.getStringAttribute('cx_profile_name');
  }
  public set cxProfileName(value: string) {
    this._cxProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cxProfileNameInput() {
    return this._cxProfileName;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataNetappOntapDnssFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataNetappOntapDnssFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // name_services_dnss - computed: true, optional: false, required: false
  private _nameServicesDnss = new DataNetappOntapDnssNameServicesDnssList(this, "name_services_dnss", false);
  public get nameServicesDnss() {
    return this._nameServicesDnss;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cx_profile_name: cdktf.stringToTerraform(this._cxProfileName),
      filter: dataNetappOntapDnssFilterToTerraform(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cx_profile_name: {
        value: cdktf.stringToHclTerraform(this._cxProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: dataNetappOntapDnssFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataNetappOntapDnssFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
