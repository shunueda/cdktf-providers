// https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/repository_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RepositoryCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * https block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/repository_certificate#https RepositoryCertificate#https}
  */
  readonly https?: RepositoryCertificateHttps[] | cdktf.IResolvable;
  /**
  * ssh block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/repository_certificate#ssh RepositoryCertificate#ssh}
  */
  readonly ssh?: RepositoryCertificateSsh[] | cdktf.IResolvable;
}
export interface RepositoryCertificateHttps {
  /**
  * The actual certificate data, dependent on the certificate type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/repository_certificate#cert_data RepositoryCertificate#cert_data}
  */
  readonly certData: string;
  /**
  * DNS name of the server this certificate is intended for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/repository_certificate#server_name RepositoryCertificate#server_name}
  */
  readonly serverName: string;
}

export function repositoryCertificateHttpsToTerraform(struct?: RepositoryCertificateHttps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_data: cdktf.stringToTerraform(struct!.certData),
    server_name: cdktf.stringToTerraform(struct!.serverName),
  }
}


export function repositoryCertificateHttpsToHclTerraform(struct?: RepositoryCertificateHttps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_data: {
      value: cdktf.stringToHclTerraform(struct!.certData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositoryCertificateHttpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RepositoryCertificateHttps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certData !== undefined) {
      hasAnyValues = true;
      internalValueResult.certData = this._certData;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryCertificateHttps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certData = undefined;
      this._serverName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certData = value.certData;
      this._serverName = value.serverName;
    }
  }

  // cert_data - computed: false, optional: false, required: true
  private _certData?: string; 
  public get certData() {
    return this.getStringAttribute('cert_data');
  }
  public set certData(value: string) {
    this._certData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certDataInput() {
    return this._certData;
  }

  // cert_info - computed: true, optional: false, required: false
  public get certInfo() {
    return this.getStringAttribute('cert_info');
  }

  // cert_subtype - computed: true, optional: false, required: false
  public get certSubtype() {
    return this.getStringAttribute('cert_subtype');
  }

  // server_name - computed: false, optional: false, required: true
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }
}

export class RepositoryCertificateHttpsList extends cdktf.ComplexList {
  public internalValue? : RepositoryCertificateHttps[] | cdktf.IResolvable

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
  public get(index: number): RepositoryCertificateHttpsOutputReference {
    return new RepositoryCertificateHttpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RepositoryCertificateSsh {
  /**
  * The actual certificate data, dependent on the certificate type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/repository_certificate#cert_data RepositoryCertificate#cert_data}
  */
  readonly certData: string;
  /**
  * The sub type of the cert, i.e. `ssh-rsa`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/repository_certificate#cert_subtype RepositoryCertificate#cert_subtype}
  */
  readonly certSubtype: string;
  /**
  * DNS name of the server this certificate is intended for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/repository_certificate#server_name RepositoryCertificate#server_name}
  */
  readonly serverName: string;
}

export function repositoryCertificateSshToTerraform(struct?: RepositoryCertificateSsh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_data: cdktf.stringToTerraform(struct!.certData),
    cert_subtype: cdktf.stringToTerraform(struct!.certSubtype),
    server_name: cdktf.stringToTerraform(struct!.serverName),
  }
}


export function repositoryCertificateSshToHclTerraform(struct?: RepositoryCertificateSsh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_data: {
      value: cdktf.stringToHclTerraform(struct!.certData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_subtype: {
      value: cdktf.stringToHclTerraform(struct!.certSubtype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositoryCertificateSshOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RepositoryCertificateSsh | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certData !== undefined) {
      hasAnyValues = true;
      internalValueResult.certData = this._certData;
    }
    if (this._certSubtype !== undefined) {
      hasAnyValues = true;
      internalValueResult.certSubtype = this._certSubtype;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryCertificateSsh | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certData = undefined;
      this._certSubtype = undefined;
      this._serverName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certData = value.certData;
      this._certSubtype = value.certSubtype;
      this._serverName = value.serverName;
    }
  }

  // cert_data - computed: false, optional: false, required: true
  private _certData?: string; 
  public get certData() {
    return this.getStringAttribute('cert_data');
  }
  public set certData(value: string) {
    this._certData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certDataInput() {
    return this._certData;
  }

  // cert_info - computed: true, optional: false, required: false
  public get certInfo() {
    return this.getStringAttribute('cert_info');
  }

  // cert_subtype - computed: false, optional: false, required: true
  private _certSubtype?: string; 
  public get certSubtype() {
    return this.getStringAttribute('cert_subtype');
  }
  public set certSubtype(value: string) {
    this._certSubtype = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certSubtypeInput() {
    return this._certSubtype;
  }

  // server_name - computed: false, optional: false, required: true
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }
}

export class RepositoryCertificateSshList extends cdktf.ComplexList {
  public internalValue? : RepositoryCertificateSsh[] | cdktf.IResolvable

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
  public get(index: number): RepositoryCertificateSshOutputReference {
    return new RepositoryCertificateSshOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/repository_certificate argocd_repository_certificate}
*/
export class RepositoryCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "argocd_repository_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RepositoryCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RepositoryCertificate to import
  * @param importFromId The id of the existing RepositoryCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/repository_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RepositoryCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "argocd_repository_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/repository_certificate argocd_repository_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RepositoryCertificateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RepositoryCertificateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'argocd_repository_certificate',
      terraformGeneratorMetadata: {
        providerName: 'argocd',
        providerVersion: '7.11.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._https.internalValue = config.https;
    this._ssh.internalValue = config.ssh;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // https - computed: false, optional: true, required: false
  private _https = new RepositoryCertificateHttpsList(this, "https", false);
  public get https() {
    return this._https;
  }
  public putHttps(value: RepositoryCertificateHttps[] | cdktf.IResolvable) {
    this._https.internalValue = value;
  }
  public resetHttps() {
    this._https.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsInput() {
    return this._https.internalValue;
  }

  // ssh - computed: false, optional: true, required: false
  private _ssh = new RepositoryCertificateSshList(this, "ssh", false);
  public get ssh() {
    return this._ssh;
  }
  public putSsh(value: RepositoryCertificateSsh[] | cdktf.IResolvable) {
    this._ssh.internalValue = value;
  }
  public resetSsh() {
    this._ssh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshInput() {
    return this._ssh.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      https: cdktf.listMapper(repositoryCertificateHttpsToTerraform, true)(this._https.internalValue),
      ssh: cdktf.listMapper(repositoryCertificateSshToTerraform, true)(this._ssh.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      https: {
        value: cdktf.listMapperHcl(repositoryCertificateHttpsToHclTerraform, true)(this._https.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RepositoryCertificateHttpsList",
      },
      ssh: {
        value: cdktf.listMapperHcl(repositoryCertificateSshToHclTerraform, true)(this._ssh.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RepositoryCertificateSshList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
