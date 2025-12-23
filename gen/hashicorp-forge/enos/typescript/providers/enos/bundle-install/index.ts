// https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/resources/bundle_install
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BundleInstallConfig extends cdktf.TerraformMetaArguments {
  /**
  * 
  * - `artifactory.username` (String) The Artifactory API username. This will likely be your hashicorp email address
  * - `artifactory.token` (String) The Artifactory API token. You can sign into Artifactory and generate one
  * - `artifactory.url` (String) The fully qualified Artifactory item URL. You can use enos_artifactory_item to search for this URL
  * - `artifactory.sha256` (String) The Artifactory item SHA 256 sum. If present this will be verified on the remote target before the package is installed
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/resources/bundle_install#artifactory BundleInstall#artifactory}
  */
  readonly artifactory?: BundleInstallArtifactory;
  /**
  * The destination directory of the installed binary, eg: /usr/local/bin/. This is required if the artifact is a zip archive and optional when installing RPM or Deb packages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/resources/bundle_install#destination BundleInstall#destination}
  */
  readonly destination?: string;
  /**
  * The method used to fetch the package
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/resources/bundle_install#getter BundleInstall#getter}
  */
  readonly fetchter?: string;
  /**
  * The method used to install the package
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/resources/bundle_install#installer BundleInstall#installer}
  */
  readonly installer?: string;
  /**
  * The name of the artifact that was installed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/resources/bundle_install#name BundleInstall#name}
  */
  readonly name?: string;
  /**
  * The local path to a zip archive install bundle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/resources/bundle_install#path BundleInstall#path}
  */
  readonly path?: string;
  /**
  * 
  * - `release.product` (String) The product name that you wish to install, eg: 'vault' or 'consul'
  * - `release.version` (String) The version of the product that you wish to install. Use the full semver version ('2.1.3' or 'latest')
  * - `release.edition` (String) The edition of the product that you wish to install. Eg: 'ce', 'ent', 'ent.hsm', 'ent.hsm.fips1403', etc.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/resources/bundle_install#release BundleInstall#release}
  */
  readonly release?: BundleInstallRelease;
  /**
  * 
  * - `transport.ssh` (Object) the ssh transport configuration
  * - `transport.ssh.user` (String) the ssh login user|string
  * - `transport.ssh.host` (String) the remote host to access
  * - `transport.ssh.private_key` (String) the private key as a string
  * - `transport.ssh.private_key_path` (String) the path to a private key file
  * - `transport.ssh.passphrase` (String) a passphrase if the private key requires one
  * - `transport.ssh.passphrase_path` (String) a path to a file with the passphrase for the private key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/resources/bundle_install#transport BundleInstall#transport}
  */
  readonly transport?: { [key: string]: any };
}
export interface BundleInstallArtifactory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/resources/bundle_install#sha256 BundleInstall#sha256}
  */
  readonly sha256?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/resources/bundle_install#token BundleInstall#token}
  */
  readonly token?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/resources/bundle_install#url BundleInstall#url}
  */
  readonly url?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/resources/bundle_install#username BundleInstall#username}
  */
  readonly username?: string;
}

export function bundleInstallArtifactoryToTerraform(struct?: BundleInstallArtifactory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sha256: cdktf.stringToTerraform(struct!.sha256),
    token: cdktf.stringToTerraform(struct!.token),
    url: cdktf.stringToTerraform(struct!.url),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function bundleInstallArtifactoryToHclTerraform(struct?: BundleInstallArtifactory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sha256: {
      value: cdktf.stringToHclTerraform(struct!.sha256),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BundleInstallArtifactoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BundleInstallArtifactory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sha256 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha256 = this._sha256;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BundleInstallArtifactory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sha256 = undefined;
      this._token = undefined;
      this._url = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sha256 = value.sha256;
      this._token = value.token;
      this._url = value.url;
      this._username = value.username;
    }
  }

  // sha256 - computed: false, optional: true, required: false
  private _sha256?: string; 
  public get sha256() {
    return this.getStringAttribute('sha256');
  }
  public set sha256(value: string) {
    this._sha256 = value;
  }
  public resetSha256() {
    this._sha256 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha256Input() {
    return this._sha256;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface BundleInstallRelease {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/resources/bundle_install#edition BundleInstall#edition}
  */
  readonly edition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/resources/bundle_install#product BundleInstall#product}
  */
  readonly product?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/resources/bundle_install#version BundleInstall#version}
  */
  readonly version?: string;
}

export function bundleInstallReleaseToTerraform(struct?: BundleInstallRelease | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    edition: cdktf.stringToTerraform(struct!.edition),
    product: cdktf.stringToTerraform(struct!.product),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function bundleInstallReleaseToHclTerraform(struct?: BundleInstallRelease | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    edition: {
      value: cdktf.stringToHclTerraform(struct!.edition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    product: {
      value: cdktf.stringToHclTerraform(struct!.product),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BundleInstallReleaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BundleInstallRelease | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._edition !== undefined) {
      hasAnyValues = true;
      internalValueResult.edition = this._edition;
    }
    if (this._product !== undefined) {
      hasAnyValues = true;
      internalValueResult.product = this._product;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BundleInstallRelease | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._edition = undefined;
      this._product = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._edition = value.edition;
      this._product = value.product;
      this._version = value.version;
    }
  }

  // edition - computed: false, optional: true, required: false
  private _edition?: string; 
  public get edition() {
    return this.getStringAttribute('edition');
  }
  public set edition(value: string) {
    this._edition = value;
  }
  public resetEdition() {
    this._edition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get editionInput() {
    return this._edition;
  }

  // product - computed: false, optional: true, required: false
  private _product?: string; 
  public get product() {
    return this.getStringAttribute('product');
  }
  public set product(value: string) {
    this._product = value;
  }
  public resetProduct() {
    this._product = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/resources/bundle_install enos_bundle_install}
*/
export class BundleInstall extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "enos_bundle_install";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BundleInstall resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BundleInstall to import
  * @param importFromId The id of the existing BundleInstall that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/resources/bundle_install#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BundleInstall to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "enos_bundle_install", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/resources/bundle_install enos_bundle_install} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BundleInstallConfig = {}
  */
  public constructor(scope: Construct, id: string, config: BundleInstallConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'enos_bundle_install',
      terraformGeneratorMetadata: {
        providerName: 'enos',
        providerVersion: '0.6.3',
        providerVersionConstraint: '0.6.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._artifactory.internalValue = config.artifactory;
    this._destination = config.destination;
    this._getter = config.fetchter;
    this._installer = config.installer;
    this._name = config.name;
    this._path = config.path;
    this._release.internalValue = config.release;
    this._transport = config.transport;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // artifactory - computed: false, optional: true, required: false
  private _artifactory = new BundleInstallArtifactoryOutputReference(this, "artifactory");
  public get artifactory() {
    return this._artifactory;
  }
  public putArtifactory(value: BundleInstallArtifactory) {
    this._artifactory.internalValue = value;
  }
  public resetArtifactory() {
    this._artifactory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactoryInput() {
    return this._artifactory.internalValue;
  }

  // destination - computed: false, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // getter - computed: true, optional: true, required: false
  private _getter?: string; 
  public get fetchter() {
    return this.getStringAttribute('getter');
  }
  public set fetchter(value: string) {
    this._getter = value;
  }
  public resetFetchter() {
    this._getter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchterInput() {
    return this._getter;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // installer - computed: true, optional: true, required: false
  private _installer?: string; 
  public get installer() {
    return this.getStringAttribute('installer');
  }
  public set installer(value: string) {
    this._installer = value;
  }
  public resetInstaller() {
    this._installer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installerInput() {
    return this._installer;
  }

  // name - computed: true, optional: true, required: false
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // release - computed: false, optional: true, required: false
  private _release = new BundleInstallReleaseOutputReference(this, "release");
  public get release() {
    return this._release;
  }
  public putRelease(value: BundleInstallRelease) {
    this._release.internalValue = value;
  }
  public resetRelease() {
    this._release.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseInput() {
    return this._release.internalValue;
  }

  // transport - computed: false, optional: true, required: false
  private _transport?: { [key: string]: any }; 
  public get transport() {
    return this.getAnyMapAttribute('transport');
  }
  public set transport(value: { [key: string]: any }) {
    this._transport = value;
  }
  public resetTransport() {
    this._transport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportInput() {
    return this._transport;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      artifactory: bundleInstallArtifactoryToTerraform(this._artifactory.internalValue),
      destination: cdktf.stringToTerraform(this._destination),
      getter: cdktf.stringToTerraform(this._getter),
      installer: cdktf.stringToTerraform(this._installer),
      name: cdktf.stringToTerraform(this._name),
      path: cdktf.stringToTerraform(this._path),
      release: bundleInstallReleaseToTerraform(this._release.internalValue),
      transport: cdktf.hashMapper(cdktf.anyToTerraform)(this._transport),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      artifactory: {
        value: bundleInstallArtifactoryToHclTerraform(this._artifactory.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BundleInstallArtifactory",
      },
      destination: {
        value: cdktf.stringToHclTerraform(this._destination),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      getter: {
        value: cdktf.stringToHclTerraform(this._getter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      installer: {
        value: cdktf.stringToHclTerraform(this._installer),
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
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      release: {
        value: bundleInstallReleaseToHclTerraform(this._release.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BundleInstallRelease",
      },
      transport: {
        value: cdktf.hashMapperHcl(cdktf.anyToHclTerraform)(this._transport),
        isBlock: false,
        type: "map",
        storageClassType: "anyMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
