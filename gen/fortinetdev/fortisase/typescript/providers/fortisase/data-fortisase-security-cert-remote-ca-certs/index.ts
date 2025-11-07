// https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_cert_remote_ca_certs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortisaseSecurityCertRemoteCaCertsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_cert_remote_ca_certs#cert_name DataFortisaseSecurityCertRemoteCaCerts#cert_name}
  */
  readonly certName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_cert_remote_ca_certs#file_content DataFortisaseSecurityCertRemoteCaCerts#file_content}
  */
  readonly fileContent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_cert_remote_ca_certs#primary_key DataFortisaseSecurityCertRemoteCaCerts#primary_key}
  */
  readonly primaryKey: string;
}
export interface DataFortisaseSecurityCertRemoteCaCertsIssuer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_cert_remote_ca_certs#c DataFortisaseSecurityCertRemoteCaCerts#c}
  */
  readonly c?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_cert_remote_ca_certs#cn DataFortisaseSecurityCertRemoteCaCerts#cn}
  */
  readonly cn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_cert_remote_ca_certs#email_address DataFortisaseSecurityCertRemoteCaCerts#email_address}
  */
  readonly emailAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_cert_remote_ca_certs#l DataFortisaseSecurityCertRemoteCaCerts#l}
  */
  readonly l?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_cert_remote_ca_certs#o DataFortisaseSecurityCertRemoteCaCerts#o}
  */
  readonly o?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_cert_remote_ca_certs#ou DataFortisaseSecurityCertRemoteCaCerts#ou}
  */
  readonly ou?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_cert_remote_ca_certs#st DataFortisaseSecurityCertRemoteCaCerts#st}
  */
  readonly st?: string;
}

export function dataFortisaseSecurityCertRemoteCaCertsIssuerToTerraform(struct?: DataFortisaseSecurityCertRemoteCaCertsIssuer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    c: cdktf.stringToTerraform(struct!.c),
    cn: cdktf.stringToTerraform(struct!.cn),
    email_address: cdktf.stringToTerraform(struct!.emailAddress),
    l: cdktf.stringToTerraform(struct!.l),
    o: cdktf.stringToTerraform(struct!.o),
    ou: cdktf.stringToTerraform(struct!.ou),
    st: cdktf.stringToTerraform(struct!.st),
  }
}


export function dataFortisaseSecurityCertRemoteCaCertsIssuerToHclTerraform(struct?: DataFortisaseSecurityCertRemoteCaCertsIssuer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    c: {
      value: cdktf.stringToHclTerraform(struct!.c),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cn: {
      value: cdktf.stringToHclTerraform(struct!.cn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_address: {
      value: cdktf.stringToHclTerraform(struct!.emailAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    l: {
      value: cdktf.stringToHclTerraform(struct!.l),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    o: {
      value: cdktf.stringToHclTerraform(struct!.o),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ou: {
      value: cdktf.stringToHclTerraform(struct!.ou),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    st: {
      value: cdktf.stringToHclTerraform(struct!.st),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseSecurityCertRemoteCaCertsIssuerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFortisaseSecurityCertRemoteCaCertsIssuer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._c !== undefined) {
      hasAnyValues = true;
      internalValueResult.c = this._c;
    }
    if (this._cn !== undefined) {
      hasAnyValues = true;
      internalValueResult.cn = this._cn;
    }
    if (this._emailAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailAddress = this._emailAddress;
    }
    if (this._l !== undefined) {
      hasAnyValues = true;
      internalValueResult.l = this._l;
    }
    if (this._o !== undefined) {
      hasAnyValues = true;
      internalValueResult.o = this._o;
    }
    if (this._ou !== undefined) {
      hasAnyValues = true;
      internalValueResult.ou = this._ou;
    }
    if (this._st !== undefined) {
      hasAnyValues = true;
      internalValueResult.st = this._st;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseSecurityCertRemoteCaCertsIssuer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._c = undefined;
      this._cn = undefined;
      this._emailAddress = undefined;
      this._l = undefined;
      this._o = undefined;
      this._ou = undefined;
      this._st = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._c = value.c;
      this._cn = value.cn;
      this._emailAddress = value.emailAddress;
      this._l = value.l;
      this._o = value.o;
      this._ou = value.ou;
      this._st = value.st;
    }
  }

  // c - computed: true, optional: true, required: false
  private _c?: string; 
  public get c() {
    return this.getStringAttribute('c');
  }
  public set c(value: string) {
    this._c = value;
  }
  public resetC() {
    this._c = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cInput() {
    return this._c;
  }

  // cn - computed: true, optional: true, required: false
  private _cn?: string; 
  public get cn() {
    return this.getStringAttribute('cn');
  }
  public set cn(value: string) {
    this._cn = value;
  }
  public resetCn() {
    this._cn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cnInput() {
    return this._cn;
  }

  // email_address - computed: true, optional: true, required: false
  private _emailAddress?: string; 
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }
  public set emailAddress(value: string) {
    this._emailAddress = value;
  }
  public resetEmailAddress() {
    this._emailAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressInput() {
    return this._emailAddress;
  }

  // l - computed: true, optional: true, required: false
  private _l?: string; 
  public get l() {
    return this.getStringAttribute('l');
  }
  public set l(value: string) {
    this._l = value;
  }
  public resetL() {
    this._l = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lInput() {
    return this._l;
  }

  // o - computed: true, optional: true, required: false
  private _o?: string; 
  public get o() {
    return this.getStringAttribute('o');
  }
  public set o(value: string) {
    this._o = value;
  }
  public resetO() {
    this._o = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oInput() {
    return this._o;
  }

  // ou - computed: true, optional: true, required: false
  private _ou?: string; 
  public get ou() {
    return this.getStringAttribute('ou');
  }
  public set ou(value: string) {
    this._ou = value;
  }
  public resetOu() {
    this._ou = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ouInput() {
    return this._ou;
  }

  // st - computed: true, optional: true, required: false
  private _st?: string; 
  public get st() {
    return this.getStringAttribute('st');
  }
  public set st(value: string) {
    this._st = value;
  }
  public resetSt() {
    this._st = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stInput() {
    return this._st;
  }
}
export interface DataFortisaseSecurityCertRemoteCaCertsUsages {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_cert_remote_ca_certs#count DataFortisaseSecurityCertRemoteCaCerts#count}
  */
  readonly count?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_cert_remote_ca_certs#type DataFortisaseSecurityCertRemoteCaCerts#type}
  */
  readonly type?: string;
}

export function dataFortisaseSecurityCertRemoteCaCertsUsagesToTerraform(struct?: DataFortisaseSecurityCertRemoteCaCertsUsages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataFortisaseSecurityCertRemoteCaCertsUsagesToHclTerraform(struct?: DataFortisaseSecurityCertRemoteCaCertsUsages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseSecurityCertRemoteCaCertsUsagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortisaseSecurityCertRemoteCaCertsUsages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseSecurityCertRemoteCaCertsUsages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._type = value.type;
    }
  }

  // count - computed: true, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // type - computed: true, optional: true, required: false
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
}

export class DataFortisaseSecurityCertRemoteCaCertsUsagesList extends cdktf.ComplexList {
  public internalValue? : DataFortisaseSecurityCertRemoteCaCertsUsages[] | cdktf.IResolvable

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
  public get(index: number): DataFortisaseSecurityCertRemoteCaCertsUsagesOutputReference {
    return new DataFortisaseSecurityCertRemoteCaCertsUsagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_cert_remote_ca_certs fortisase_security_cert_remote_ca_certs}
*/
export class DataFortisaseSecurityCertRemoteCaCerts extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortisase_security_cert_remote_ca_certs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortisaseSecurityCertRemoteCaCerts resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortisaseSecurityCertRemoteCaCerts to import
  * @param importFromId The id of the existing DataFortisaseSecurityCertRemoteCaCerts that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_cert_remote_ca_certs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortisaseSecurityCertRemoteCaCerts to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortisase_security_cert_remote_ca_certs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_cert_remote_ca_certs fortisase_security_cert_remote_ca_certs} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortisaseSecurityCertRemoteCaCertsConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortisaseSecurityCertRemoteCaCertsConfig) {
    super(scope, id, {
      terraformResourceType: 'fortisase_security_cert_remote_ca_certs',
      terraformGeneratorMetadata: {
        providerName: 'fortisase',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certName = config.certName;
    this._fileContent = config.fileContent;
    this._primaryKey = config.primaryKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cert_name - computed: false, optional: true, required: false
  private _certName?: string; 
  public get certName() {
    return this.getStringAttribute('cert_name');
  }
  public set certName(value: string) {
    this._certName = value;
  }
  public resetCertName() {
    this._certName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certNameInput() {
    return this._certName;
  }

  // file_content - computed: false, optional: true, required: false
  private _fileContent?: string; 
  public get fileContent() {
    return this.getStringAttribute('file_content');
  }
  public set fileContent(value: string) {
    this._fileContent = value;
  }
  public resetFileContent() {
    this._fileContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileContentInput() {
    return this._fileContent;
  }

  // ftntid - computed: true, optional: false, required: false
  public get ftntid() {
    return this.getNumberAttribute('ftntid');
  }

  // issuer - computed: true, optional: false, required: false
  private _issuer = new DataFortisaseSecurityCertRemoteCaCertsIssuerOutputReference(this, "issuer");
  public get issuer() {
    return this._issuer;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // primary_key - computed: false, optional: false, required: true
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // usages - computed: true, optional: false, required: false
  private _usages = new DataFortisaseSecurityCertRemoteCaCertsUsagesList(this, "usages", false);
  public get usages() {
    return this._usages;
  }

  // valid_from - computed: true, optional: false, required: false
  public get validFrom() {
    return this.getStringAttribute('valid_from');
  }

  // valid_to - computed: true, optional: false, required: false
  public get validTo() {
    return this.getStringAttribute('valid_to');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cert_name: cdktf.stringToTerraform(this._certName),
      file_content: cdktf.stringToTerraform(this._fileContent),
      primary_key: cdktf.stringToTerraform(this._primaryKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cert_name: {
        value: cdktf.stringToHclTerraform(this._certName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_content: {
        value: cdktf.stringToHclTerraform(this._fileContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_key: {
        value: cdktf.stringToHclTerraform(this._primaryKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
